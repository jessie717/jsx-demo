interface ColumnItem {
	align?: string
	label?: string
	prop?: string
	type?: string
	slot?: string
	width?: string
}

interface TableDataItem {
	address: string
	city: string
	date: string
	id: string
	name: string
	state: string
	tag: string
	zip: string
}

interface TableColumnScope {
	$index: number
	column: any
	row: TableDataItem
}
