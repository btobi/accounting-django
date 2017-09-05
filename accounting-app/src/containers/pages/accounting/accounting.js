import React from "react"
import {setPageTitle} from "../../../actions/pageActions";
import {connect} from "react-redux";
import {getAccountingRecords} from "../../../actions/accountingActions";
import AccountingRecords from "./accounting-records";

@connect((store) => {
    return {
        accounts: store.masterdata.accounts,
        records: store.accounting.records,
    }
})
export default class Accounting extends React.Component {

    componentWillMount() {
        this.props.dispatch(setPageTitle("Buchungssätze"))
        this.props.dispatch(getAccountingRecords())
    }

    render() {

        return (
            <AccountingRecords records={this.props.records} />
        )

    }

}