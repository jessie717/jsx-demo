export const tableData: TableDataItem[] = [
	{
		id: '1',
		date: '2016-05-03',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Home'
	},
	{
		id: '2',
		date: '2016-05-02',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office'
	},
	{
		id: '3',
		date: '2016-05-04',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Home'
	},
	{
		id: '4',
		date: '2016-05-01',
		name: 'Tom',
		state: 'California',
		city: 'Los Angeles',
		address: 'No. 189, Grove St, Los Angeles',
		zip: 'CA 90036',
		tag: 'Office'
	}
]
export const columns: ColumnItem[] = [
	{ type: 'selection', width: '60', align: 'center' },
	{ prop: 'date', label: '日期', align: 'center' },
	{ prop: 'name', label: '姓名', align: 'center' },
	{ prop: 'state', label: '州', align: 'center' },
	{ prop: 'city', label: '城市', align: 'center' },
	{ prop: 'address', label: '地址', align: 'center' },
	{ prop: 'zip', label: '邮编', align: 'center' },
	{ prop: 'tag', label: '标签', align: 'center' },
	{
		label: '操作',
		align: 'center',
		slot: 'operation'
	}
]
