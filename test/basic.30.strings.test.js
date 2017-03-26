var obj = require('../src/basic.30.strings');

describe("basic.30.strings.general" , function(){

	it("v2 should be of type number and equal to 11", function(){
		obj.str1.should.be.exactly("Hello World");
    obj.v2.should.be.exactly(obj.str1.length).and.be.of.type("number");
	});
		
  it('v4 should be equal to "H" and of type string', function(){
		obj.str2.should.be.exactly("Hello World");
    obj.v4.should.be.exactly(obj.str2.charAt(0)).and.be.of.type("string");
    obj.v4_value.should.be.exactly("H");
	});
	
  it('v5 should be equal to " " and of type string', function(){
		obj.str2.should.be.exactly("Hello World");
    obj.v5.should.be.exactly(obj.str2.charAt(5)).and.be.of.type("string");
    obj.v5_value.should.be.exactly(" ");
	});

  it('v6 should be equal to "" and of type string', function(){
		obj.str2.should.be.exactly("Hello World");
    obj.v6.should.be.exactly(obj.str2.charAt(obj.str2.length)).and.be.of.type("string");
    obj.v6_value.should.be.exactly("");
	});

  it('v7 should be equal to "d" and of type string', function(){
		obj.str2.should.be.exactly("Hello World");
    obj.v7.should.be.exactly(obj.str2.charAt(obj.str2.length -1 )).and.be.of.type("string");
    obj.v7_value.should.be.exactly("d");
	});


}); //end of describe


describe("basic.30.strings.split" , function(){

		
  it('v9 should be  to "Crime"  and of type string', function(){
		obj.str3.should.be.exactly("Crime Of The Century");
    obj.v8.should.be.eql(obj.str3.split(" "));
    obj.v9.should.be.exactly(obj.v8[0]);
    obj.v9_value.should.be.exactly(obj.v8[0].toString());
    obj.v9_type.should.be.exactly(typeof(obj.v8[0]));  
	});

  it('v11 should be  to "r"  and of type string', function(){
		obj.str4.should.be.exactly("Starman");
    obj.v10.should.be.eql(obj.str4.split(""));
    obj.v11.should.be.exactly(obj.v10[3]);
    obj.v11_value.should.be.exactly(obj.v10[3].toString());
    obj.v11_type.should.be.exactly(typeof(obj.v10[3]));  
	});

  it('v14 should be  to "Stardust"  and of type string', function(){
		obj.str5.should.be.exactly("Ziggy,Stardust");
    obj.v12.should.be.eql(obj.str5.split(","));
    obj.v14.should.be.exactly(obj.v12[1]);
    obj.v14_value.should.be.exactly(obj.v12[1].toString());
    obj.v14_type.should.be.exactly(typeof(obj.v12[1]));  
	});



  }); //end of describe

describe("basic.30.strings.slice" , function(){

		
  it('v15 should be  to "Stardust" ', function(){
		obj.str6.should.be.exactly("Ziggy Stardust By David Bowie");    
    obj.v15.should.be.eql(obj.str6.slice(6,6+8));
    obj.v15_value.should.be.exactly(obj.str6.slice(6,6+8).toString());
	});

  it('v16 should be "Ziggy" ', function(){
		obj.str6.should.be.exactly("Ziggy Stardust By David Bowie")    
    obj.v16.should.be.eql(obj.str6.slice(0,5));
    obj.v16_value.should.be.exactly(obj.str6.slice(0,5).toString());
	});

}); //end of describe


describe("basic.30.strings.indexOf" , function(){

		
  it('v17 should be 18 ', function(){
		obj.str6.should.be.exactly("Ziggy Stardust By David Bowie");    
    obj.v17.should.be.eql(obj.str6.indexOf("David"));
    obj.v17_value.should.be.exactly(obj.str6.indexOf("David").toString());
	});

  
}); //end of describe

describe("basic.30.strings.replace" , function(){

		
  it('v18 should be "Under Pressure By David Bowie" ', function(){
		obj.str8.should.be.exactly("Under Pressure by Queen");    
    obj.v18.should.be.eql(obj.str8.replace("Queen","David Bowie"));
    obj.v18_value.should.be.exactly(obj.str8.replace("Queen","David Bowie").toString());
	});

  it('v19 should be "The Jean-Genie" ', function(){
		obj.str9.should.be.exactly("The-Jean-Genie");
    obj.v19.should.be.eql(obj.str9.replace("-"," "));
    obj.v19_value.should.be.exactly(obj.str9.replace("-"," ").toString());
	});
  
}); //end of describe



describe("basic.30.strings.enumeration.isSpace" , function(){
  
  it('isSpace("Hello World") should return true', function(){
    obj.isSpace("Hello World").should.be.exactly(true);
	});
	
  it('isSpace("Hello World Here I Come") should return true', function(){
    obj.isSpace("Hello World Here I Come").should.be.exactly(true);
	});
	
  it('isSpace(" ") should return true', function(){
    obj.isSpace(" ").should.be.exactly(true);
	});
  
  it('isSpace("HelloWorld") should return false', function(){
    obj.isSpace("HelloWorld").should.be.exactly(false);
	});
	
  it('isSpace(NaN) should return false', function(){
    obj.isSpace(NaN).should.be.exactly(false);
	});
	
  it('isSpace(true) should return false', function(){
    obj.isSpace(true).should.be.exactly(false);
	});
	
  it('isSpace(null) should return false', function(){
    obj.isSpace(null).should.be.exactly(false);
	});
	
  it('isSpace(undefined) should return false', function(){
    obj.isSpace(undefined).should.be.exactly(false);
	});
	
}); //end of describe


describe("basic.30.strings.enumeration.firstSpace" , function(){
  
  it('firstSpace("Hello World") should return 5', function(){
    obj.firstSpace("Hello World").should.be.exactly(5);
	});
	
  it('firstSpace("Hello World Here I Come") should return 5', function(){
    obj.firstSpace("Hello World Here I Come").should.be.exactly(5);
	});
	
  it('firstSpace(" ") should return 0', function(){
    obj.firstSpace(" ").should.be.exactly(0);
	});
  
  it('firstSpace("HelloWorld") should return false', function(){
    obj.firstSpace("HelloWorld").should.be.exactly(false);
	});
	
  it('firstSpace(NaN) should return false', function(){
    obj.firstSpace(NaN).should.be.exactly(false);
	});
	
  it('firstSpace(true) should return false', function(){
    obj.firstSpace(true).should.be.exactly(false);
	});
	
  it('firstSpace(null) should return false', function(){
    obj.firstSpace(null).should.be.exactly(false);
	});
	
  it('firstSpace(undefined) should return false', function(){
    obj.firstSpace(undefined).should.be.exactly(false);
	});
	
}); //end of describe


describe("basic.30.strings.enumeration.countSpace" , function(){
  
  it('countSpace("Hello World") should return 1', function(){
    obj.countSpace("Hello World").should.be.exactly(1);
	});
	
  it('countSpace("Hello World Here I Come") should return 4', function(){
    obj.countSpace("Hello World Here I Come").should.be.exactly(4);
	});
	
  it('countSpace(" ") should return 1', function(){
    obj.countSpace(" ").should.be.exactly(1);
	});
  
  it('countSpace("HelloWorld") should return 0', function(){
    obj.countSpace("HelloWorld").should.be.exactly(0);
	});
	
  it('countSpace(NaN) should return false', function(){
    obj.countSpace(NaN).should.be.exactly(false);
	});
	
  it('countSpace(true) should return false', function(){
    obj.countSpace(true).should.be.exactly(false);
	});
	
  it('countSpace(null) should return false', function(){
    obj.countSpace(null).should.be.exactly(false);
	});
	
  it('countSpace(undefined) should return false', function(){
    obj.countSpace(undefined).should.be.exactly(false);
	});
	
}); //end of describe

describe("basic.30.strings.bonus.lastChar" , function(){
  
  it('lastChar("abc def") should return "f" ', function(){
    obj.lastChar("abc def").should.be.exactly("f");
	});

  it('lastChar() should return false ', function(){
    obj.lastChar().should.be.exactly(false);
	});

}); //end of describe

describe("basic.30.strings.bonus.countVowels" , function(){
  
  it('countVowels("abc def") should return 2" ', function(){
    obj.countVowels("abc def").should.be.exactly(2);
	});

  it('countVowels("abc def ghi") should return 3 ', function(){
    obj.countVowels("abc def ghi").should.be.exactly(3);
	});

  it('countVowels("aeiou") should return 5 ', function(){
    obj.countVowels("aeiou").should.be.exactly(5);
	});

  it('countVowels("The Jean Genie") should return 6 ', function(){
    obj.countVowels("The Jean Genie").should.be.exactly(6);
	});



  it('countVowels() should return false ', function(){
    obj.countVowels().should.be.exactly(false);
	});
}); //end of describe




describe("basic.30.strings.bonus.countWhiteSpace" , function(){
  
  it('countWhiteSpace("abc def") should return 1" ', function(){
    obj.countWhiteSpace("abc def").should.be.exactly(1);
	});

  it('countWhiteSpace("abc def ghi") should return 2 ', function(){
    obj.countWhiteSpace("abc def ghi").should.be.exactly(2);
	});

  it('countWhiteSpace("abcdef") should return 0 ', function(){
    obj.countWhiteSpace("abcdef").should.be.exactly(0);
	});
  
  it('countWhiteSpace("abc  def") should return 2 ', function(){
    obj.countWhiteSpace("abc  def").should.be.exactly(2);
	});
  
  it('countWhiteSpace("abc\/tdef") should return 1 ', function(){
    obj.countWhiteSpace("abc\tdef").should.be.exactly(1);
	});

  it('countWhiteSpace(" abc\/tdef\/nghi\/rxyz") should return 4 ', function(){
    obj.countWhiteSpace(" abc\tdef\nghi\rxyz").should.be.exactly(4);
	});
  

  it('countWhiteSpace() should return false ', function(){
    obj.countWhiteSpace().should.be.exactly(false);
	});
}); //end of describe


describe("basic.30.strings.bonus.deSpacify" , function(){
  
  it('deSpacify("abc def") should return "abcdef" ', function(){
    obj.deSpacify("abc def").should.be.exactly("abcdef");
	});

  it('deSpacify("abc def ghi") should return "abcdefghi" ', function(){
    obj.deSpacify("abc def ghi").should.be.exactly("abcdefghi");
	});

  it('deSpacify("abcdef") should return "abcdef" ', function(){
    obj.deSpacify("abcdef").should.be.exactly("abcdef");
	});
  
  it('deSpacify("abc  def") should return "abcdef" ', function(){
    obj.deSpacify("abc  def").should.be.exactly("abcdef");
	});
  
  it('deSpacify("abc\/tdef") should return "abcdef" ', function(){
    obj.deSpacify("abc\tdef").should.be.exactly("abcdef");
	});
  
  it('deSpacify("abc\/ndef") should return "abcdef" ', function(){
    obj.deSpacify("abc\ndef").should.be.exactly("abcdef");
	});

  it('deSpacify("abc\/rdef") should return "abcdef" ', function(){
    obj.deSpacify("abc\rdef").should.be.exactly("abcdef");
	});
  
  it('deSpacify("abc\/tdef\/nghi") should return "abcdefghi" ', function(){
    obj.deSpacify("abc\tdef\nghi").should.be.exactly("abcdefghi");
	});

  it('deSpacify() should return false ', function(){
    obj.deSpacify().should.be.exactly(false);
	});
}); //end of describe


describe("basic.30.strings.bonus.slugify" , function(){
  
  it('slugify("abc def") should return "abc-def" ', function(){
    obj.slugify("abc def").should.be.exactly("abc-def");
	});

  it('slugify("abc def ghi") should return "abc-def-ghi" ', function(){
    obj.slugify("abc def ghi").should.be.exactly("abc-def-ghi");
	});

  it('slugify("abcdef") should return "abcdef" ', function(){
    obj.slugify("abcdef").should.be.exactly("abcdef");
	});
  
  it('slugify("abc  def") should return "abc--def" ', function(){
    obj.slugify("abc  def").should.be.exactly("abc--def");
	});
  
  it('slugify("abc\/tdef") should return "abc/tdef" ', function(){
    obj.slugify("abc\tdef").should.be.exactly("abc-def");
	});
  
  it('slugify("abc\/ndef") should return "abc-def" ', function(){
    obj.slugify("abc\ndef").should.be.exactly("abc-def");
	});

  it('slugify("abc\/rdef") should return "abc-def" ', function(){
    obj.slugify("abc\rdef").should.be.exactly("abc-def");
	});
  
  it('slugify("abc\/tdef\/nghi") should return "abc-def-ghi" ', function(){
    obj.slugify("abc\tdef\nghi").should.be.exactly("abc-def-ghi");
	});

  it('slugify() should return false ', function(){
    obj.slugify().should.be.exactly(false);
	});
}); //end of describe



