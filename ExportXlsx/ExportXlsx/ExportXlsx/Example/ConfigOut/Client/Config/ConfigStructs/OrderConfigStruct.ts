/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{
	export class OrderConfigStruct extends BaseConfig
	{

		id : number;
		zh_cn_name1 : string;
		zh_cn_name2 : string;
		icon : number;
		block : number;
		quality : number;
		need : DTItemNum[];
		reward : DTItemNum[];
		expect : number;




	}


}