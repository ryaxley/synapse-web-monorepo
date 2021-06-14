import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { toError } from '../../utils/ErrorUtils'
import { SynapseSpinner } from '../LoadingScreen'
import { useGetEntityHeaders } from '../../utils/hooks/SynapseAPI/useGetEntityHeaders'
import { EntityHeader } from '../../utils/synapseTypes'
import { Icon } from '../row_renderers/utils'
import { VARIABLE_DIFFICULTY } from '../../utils/SynapseConstants'
import { Button } from 'react-bootstrap'


export type RequestDownloadCardProps = {
  entityId: string
  count: number
}

export const RequestDownloadCard:React.FunctionComponent<RequestDownloadCardProps> = (
  {
    entityId,
    count,
  }: RequestDownloadCardProps
) => {
  const handleError = useErrorHandler()
  const {
    data,
    isFetching,
    isError,
    error: newError,
  } = useGetEntityHeaders([{targetId: entityId}])
  const entityHeader:EntityHeader | undefined = data?.results[0]
  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError])

  return (
    <>
      {!isError && !isFetching && (
        <div className="RequestDownloadCart">
          <Icon type={VARIABLE_DIFFICULTY} />
          <div>
            <div className="actionRequiredTitle">Requires Download Permission</div>
            <div className="actionRequiredFileCount">{count} File(s)</div>
            <div className="actionRequiredDescription">
              You must be granted the download permission on <strong>{entityHeader?.name}</strong> in order to download this set of files.
            </div>
          </div>
          <a href={`https://www.synapse.org/#!Synapse:${entityHeader?.id}`} target='_blank' rel='noreferrer'>
            <Button>Start</Button>
          </a>
        </div>
      )}
      {isFetching && (
        <div className="EntityFinderDetailsView__Placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
    </>
  )
}
