/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

namespace configs
{

	export class MovieExpectConfigReaderStruct extends CsvConfigRender<    MovieExpectConfig      >
	{
		path = "MovieExpect";


        ParseCsv(csv: string[] )
        {
			let config = new MovieExpectConfig();


			config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
			config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
			config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
			config.expect_req = csvGetInt(csv,  this.GetHeadIndex(  "expect_req"  )   );
			config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );
			config.pic_word = csvGetString(csv,  this.GetHeadIndex(  "pic_word"  )   );
			config.gain_up = csvGetInt(csv,  this.GetHeadIndex(  "gain_up"  )   );


			this.addConfig(config);
        }
	}
}