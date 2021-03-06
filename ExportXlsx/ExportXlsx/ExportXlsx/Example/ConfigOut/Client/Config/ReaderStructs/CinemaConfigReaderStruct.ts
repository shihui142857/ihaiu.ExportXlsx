/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class CinemaConfigReaderStruct extends CsvConfigRender<    CinemaConfig      >
	{
		path = "Cinema";


        ParseCsv(csv: string[] )
        {
			let config = new CinemaConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
			config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
			config.sign_level = csvGetInt(csv,  this.GetHeadIndex(  "sign_level"  )   );
			config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );
			config.num = csvGetInt(csv,  this.GetHeadIndex(  "num"  )   );
			config.proportion = csvGetFloat(csv,  this.GetHeadIndex(  "proportion"  )   );
			config.favorite_actor = csvGetInt(csv,  this.GetHeadIndex(  "favorite_actor"  )   );
			config.increase = csvGetInt(csv,  this.GetHeadIndex(  "increase"  )   );

			


			this.addConfig(config);
        }
	}
}