import {
  Evaluation,
  EvaluationStatus,
} from '../../../../lib/utils/synapseTypes/Evaluation'
import {
  EvaluationEditor,
  EvaluationEditorProps,
} from '../../../../lib/containers/evaluation_queues/EvaluationEditor'
import JestMockPromise from 'jest-mock-promise'
import { SynapseClient } from '../../../../lib/utils'
import { mount } from 'enzyme'
import React from 'react'
import { Form } from 'react-bootstrap'

describe('test EvaluationEditor', () => {
  const sessionToken = 'sssssssssssssssssssssss'
  const evaluationId = '1234'
  const entityId = 'syn1111111'
  let evaluation: Evaluation
  let props: EvaluationEditorProps

  let mockGetEvaluation: jest.Mock
  let mockCreateEvaluation: jest.Mock
  let mockUpdateEvaluation: jest.Mock
  let mockDeleteEvaluation: jest.Mock

  beforeEach(() => {
    evaluation = {
      id: evaluationId,
      etag: 'eeeeeeeeeeeeeeeee',
      name: 'E V A L U A T I O N',
      description: 'This is an awesome queue',
      ownerId: '1231231321',
      createdOn: '2020-09-18T09:44:04.939Z',
      contentSource: entityId,
      status: EvaluationStatus.OPEN,
      submissionInstructionsMessage: "no you can't just make a submission",
      submissionReceiptMessage: 'haha submission go brrrrrrrr',
    }
    props = {
      sessionToken: sessionToken,
      evaluationId: evaluationId,
      utc: true,
    }

    mockGetEvaluation = jest.fn(
      () => new JestMockPromise(resolve => resolve(evaluation)),
    )
    jest
      .spyOn(SynapseClient, 'getEvaluation')
      .mockImplementation(mockGetEvaluation)

    mockUpdateEvaluation = jest.fn(
      () => new JestMockPromise(resolve => resolve(evaluation)),
    )
    jest
      .spyOn(SynapseClient, 'updateEvaluation')
      .mockImplementation(mockUpdateEvaluation)

    mockCreateEvaluation = jest.fn(
      () => new JestMockPromise(resolve => resolve(evaluation)),
    )
    jest
      .spyOn(SynapseClient, 'createEvaluation')
      .mockImplementation(mockCreateEvaluation)

    mockDeleteEvaluation = jest.fn(
      () => new JestMockPromise(resolve => resolve()),
    )
    jest
      .spyOn(SynapseClient, 'deleteEvaluation')
      .mockImplementation(mockDeleteEvaluation)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('retrieve evaluation from API if evaluationId is provided', () => {
    const wrapper = mount(<EvaluationEditor {...props} />)

    expect(wrapper.find('h4').text()).toBe('Edit Evaluation Queue')
    expect(mockGetEvaluation).toBeCalledWith(evaluationId, sessionToken)
    expect(wrapper.find('ErrorBanner').exists()).toBe(false)
  })
  test('do not retrieve evaluation from API if id is not provided', () => {
    props = { ...props, entityId, evaluationId: undefined }
    const wrapper = mount(<EvaluationEditor {...props} />)

    expect(wrapper.find('h4').text()).toBe('Create Evaluation Queue')
    expect(mockGetEvaluation).not.toBeCalled()
    expect(wrapper.find('ErrorBanner').exists()).toBe(false)
  })

  test('retrieve evaluation from API failed', () => {
    mockGetEvaluation.mockImplementation(
      () =>
        new JestMockPromise((resolve, reject) =>
          reject(new Error('GetEvaluation error')),
        ),
    )

    const wrapper = mount(<EvaluationEditor {...props} />)

    expect(mockGetEvaluation).toBeCalledWith(evaluationId, sessionToken)
    expect(wrapper.find('ErrorBanner').exists()).toBe(true)
  })

  test('error thrown when using both evaluationId and entityId', () => {
    props = { ...props, entityId, evaluationId }

    spyOn(console, 'error')

    expect(() => mount(<EvaluationEditor {...props} />)).toThrow(Error)
  })

  test('save button clicked when using entityId creates new evaluation', () => {
    props = { ...props, entityId, evaluationId: undefined }

    const wrapper = mount(<EvaluationEditor {...props} />)

    const nameInputBox = wrapper.find(Form.Control).at(0)
    expect(nameInputBox.prop('value')).toBe('')
    nameInputBox.simulate('change', {
      target: { value: 'E V A L U A T I O N' },
    })

    wrapper.find('Button.save-button').simulate('click')

    expect(mockCreateEvaluation).toBeCalledWith(
      {
        contentSource: 'syn1111111',
        description: '',
        name: 'E V A L U A T I O N',
        status: 'PLANNED',
        submissionInstructionsMessage: '',
        submissionReceiptMessage: '',
      },
      sessionToken,
    )
    expect(mockUpdateEvaluation).not.toBeCalled()

    //clicking save button again after the first time should call update instead
    wrapper.find('Button.save-button').simulate('click')
    expect(mockUpdateEvaluation).toBeCalledWith(evaluation, sessionToken)
  })

  test('save button clicked when using evaluationId updates evaluation', () => {
    const wrapper = mount(<EvaluationEditor {...props} />)

    //clicking save button again after the first time should call update instead
    wrapper.find('Button.save-button').simulate('click')
    expect(mockUpdateEvaluation).toBeCalledWith(evaluation, sessionToken)
  })

  // Can't test dropdown menu interaction w/ an undefined onDelete
  // because the DropdownMenu does not generate child components in enzyme's tree
  // the options will show up in the wrapper.html()
  // once a click on the dropdown is simulated,
  // but doing a string search on that seems hacky
})
