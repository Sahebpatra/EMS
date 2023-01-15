import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'dy-table',
    templateUrl: './dynamic-table.component.html',
    styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit, OnChanges {
    @Input() RowData: any;
    @Input() CustomHeader: any;
    @Input() ColumnOrder: any;
    @Input() HideColumn: any;
    @Input() ActionClumn: any;
    @Output() clickEdit = new EventEmitter();
    @Output() clickView = new EventEmitter();
    @Output() clickDelete = new EventEmitter();

    tableHeaders = [];
    dytData: any = {
        CustomHeader: false,
        ActionClumn: false,
        ColumnOrder: [],
        HideColumn: [],
        RowData: []
    };
    ngOnInit() {
        this.getHeaders();
        this.dytData.RowData = this.RowData;
        console.log(this.dytData.RowData)
    }
    ngOnChanges(change: SimpleChanges) {
        console.log(change['RowData'].currentValue)
        change['RowData'] != undefined ? this.dytData.RowData = change['RowData'].currentValue : '';
        change['CustomHeader'] != undefined ? this.dytData.CustomHeader = change['CustomHeader'].currentValue : '';
        change['ColumnOrder'] != undefined ? this.dytData.ColumnOrder = change['ColumnOrder'].currentValue : '';
        change['HideColumn'] != undefined ? this.dytData.HideColumn = change['HideColumn'].currentValue : '';
        change['ActionClumn'] != undefined ? this.dytData.ActionClumn = change['ActionClumn'].currentValue : '';
        console.log(this.dytData.RowData)
    }
    onEditClick(item: any) {
            this.clickEdit.emit(item);
    }
    onViewClick(item: any) {
            this.clickView.emit(item);
    }
    onDeleteClick(item: any) {
            this.clickDelete.emit(item);
    }
    getHeaders() {
        let headers: string[] = [];
        if (this.dytData.CustomHeader) {
            this.tableHeaders = this.dytData.ColumnOrder;
            console.log(this.dytData)
        } else {
            if (this.dytData.RowData) {
                this.dytData.RowData.forEach((value) => {
                    Object.keys(value).forEach((key) => {
                        if (!headers.find(ele => ele == key)) {
                            headers.push(key);
                        }
                    })
                })
            }
            this.tableHeaders = headers;
            this.orderTableHeader();
            this.hideColumn();
        }
    }
    orderTableHeader() {
        this.dytData.ColumnOrder.map((o, i) => {
            let th = this.tableHeaders.find(ele => ele.toLowerCase() == o.toLocaleLowerCase());
            if (th) {
                let index = this.tableHeaders.indexOf(th);
                this.tableHeaders.splice(index, 1)
                this.tableHeaders.splice(i, 0, th)
            }
        })
    }
    hideColumn() {
        this.dytData.HideColumn.map((o, i) => {
            let th = this.tableHeaders.find(ele => ele.toLowerCase() == o.toLocaleLowerCase());
            if (th) {
                let index = this.tableHeaders.indexOf(th);
                this.tableHeaders.splice(index, 1)
            }
        })
    }
}