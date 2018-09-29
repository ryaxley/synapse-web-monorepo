import React from 'react'
import * as Utils from './utils/index';

export default class Study extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            hasCreatedIndex: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState({
            showMore: !this.state.showMore
        })
    }

    render () {

        const {data, schema, icon} = this.props
        const projectName = data[schema.projectName]
        const projectLeads = data[schema.projectLeads] && data[schema.projectLeads].split(";").join(" / ")
        let summary = data[schema.summary]
        // let ShowMore = <ShowMe 
        //                 summary={summary}
        //                 onClick={this.handleClick}
        //                 ></ShowMe>

        const diseaseFocus = data[schema.diseaseFocus]
        const tumorType = data[schema.tumorType]
        
        const projectStatus = data[schema.projectStatus]
        const fundingAgency = data[schema.fundingAgency]
        const dataStatus = data[schema.dataStatus]
        const institutions = data[schema.institutions]

        const rows = [
            ["STATUS", projectStatus, "INVESTIGATORS", projectLeads, "INSTITUTIONS", institutions],
            ["FUNDER", fundingAgency], 
            ["DATA", dataStatus,], 
            ["PUBLICATION", "NONE"]
        ]

        return (
            <Utils.CardBorder>
                <Utils.Section>
                    <Utils.CardIcon icon={icon}/>
                    <Utils.Summary>
                        <Utils.SummaryHeader
                            name="STUDY"
                            title={projectName}
                        />
                        <Utils.ShowMe onClick={this.handleClick} summary={summary} />
                        <Utils.Authors authors={projectLeads} />
                        <Utils.ChipContainer
                            chips={
                                [
                                    {type: "gray", text: tumorType},
                                    {type: "blue", text: diseaseFocus}
                                ]
                            }                    
                        />
                    </Utils.Summary>
                </Utils.Section>
               {
                    this.state.showMore && <Utils.Footer rows={rows}/>
                }
            </Utils.CardBorder>
        )

    }
}