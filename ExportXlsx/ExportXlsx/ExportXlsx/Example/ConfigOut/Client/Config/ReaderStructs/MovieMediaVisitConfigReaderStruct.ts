/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MovieMediaVisitConfigReaderStruct extends CsvConfigRender<    MovieMediaVisitConfig      >
	{
		path = "MovieMediaVisit";


        ParseCsv(csv: string[] )
        {
			let config = new MovieMediaVisitConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.name_tips = csvGetString(csv,  this.GetHeadIndex(  "name_tips"  )   );
			config.levelup_req = csvGetInt(csv,  this.GetHeadIndex(  "levelup_req"  )   );
			config.cost_id = csvGetInt(csv,  this.GetHeadIndex(  "cost_id"  )   );
			config.cost_num = csvGetInt(csv,  this.GetHeadIndex(  "cost_num"  )   );
			config.min_expection = csvGetInt(csv,  this.GetHeadIndex(  "min_expection"  )   );
			config.max_expection = csvGetInt(csv,  this.GetHeadIndex(  "max_expection"  )   );
			config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );
			config.big_pic = csvGetInt(csv,  this.GetHeadIndex(  "big_pic"  )   );


			this.addConfig(config);
        }
	}
}