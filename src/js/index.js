$(function(){
	$(window).scrollTop(0);
	window.onscroll=function(){
		var h=document.documentElement.scrollTop||document.body.scrollTop;
		if(h>=3480&h<5000){
			$(".word").css("-webkit-transform","translateX(0)")
			$(".MV").css("-webkit-transform","rotate(0)")
			$(".QR_code").css("-webkit-transform","rotate(0)")
		}else if(h>=3300&h<3480){
			$(".TouristVersion div").css("-webkit-transform","rotate(0)")
			$(".word").css("-webkit-transform","translateX(0)")
			$(".MV").css("-webkit-transform","rotate(0)")
			$(".QR_code").css("-webkit-transform","rotate(0)")
		}else if(h>=3050&h<3300){
			$(".TouristVersion div").css("-webkit-transform","rotate(0)")
			$(".word").css("-webkit-transform","translateX(0)")
			$(".MV").css("-webkit-transform","rotate(0)")
		}else if(h>=2830&h<3050){
			$(".TouristVersion>h1").css("-webkit-transform","translateX(0)")
			$(".TouristVersion>p").css("-webkit-transform","translateX(0)")
			$(".TouristVersion div").css("-webkit-transform","rotate(0)")
			$(".word").css("-webkit-transform","translateX(0)")
			$(".MV").css("-webkit-transform","rotate(0)")
		}else if(h>=2800&h<2830){
			$(".TouristVersion>h1").css("-webkit-transform","translateX(0)")
			$(".TouristVersion>p").css("-webkit-transform","translateX(0)")
			$(".TouristVersion div").css("-webkit-transform","rotate(0)")
		}else if(h>=2450&h<2800){
			$(".TouristVersion>h1").css("-webkit-transform","translateX(0)")
			$(".TouristVersion>p").css("-webkit-transform","translateX(0)")
			$(".TouristVersion div").css("-webkit-transform","rotate(0)")
			$(".TailorMade>h1").css("-webkit-transform","translateX(0)")
			$(".TailorMade>p").css("-webkit-transform","translateX(0)")
		}else if(h>=2150&h<2450){
			$(".TouristVersion>h1").css("-webkit-transform","translateX(0)")
			$(".TouristVersion>p").css("-webkit-transform","translateX(0)")
			$(".TouristVersion div").css("-webkit-transform","rotate(0)")
			$(".LeaderVersion div").css("-webkit-transform","rotate(0)")
			$(".TailorMade>h1").css("-webkit-transform","translateX(0)")
			$(".TailorMade>p").css("-webkit-transform","translateX(0)")
		}else if(h>=2000&h<2150){
			$(".TouristVersion>h1").css("-webkit-transform","translateX(0)")
			$(".TouristVersion>p").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion div").css("-webkit-transform","rotate(0)")
			$(".TailorMade>h1").css("-webkit-transform","translateX(0)")
			$(".TailorMade>p").css("-webkit-transform","translateX(0)")
		}else if(h>=1700&h<2000){
			$(".LeaderVersion>h1").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion>p").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion div").css("-webkit-transform","rotate(0)")
			$(".TailorMade>h1").css("-webkit-transform","translateX(0)")
			$(".TailorMade>p").css("-webkit-transform","translateX(0)")
		}else if(h>=1400&h<1700){
			$(".GreatOriginality>h1").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>p").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion>h1").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion>p").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion div").css("-webkit-transform","rotate(0)");
		}else if(h>=1250&h<1400){
			$(".contentAll").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>h1").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>p").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion>h1").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion>p").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion div").css("-webkit-transform","rotate(0)");
		}else if(h>=1100&h<1250){
			$(".imggroup").css("-webkit-transform","translateX(0)")
			$(".contentAll").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>h1").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>p").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion>h1").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion>p").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion div").css("-webkit-transform","rotate(0)");
		}else if(h>=1000&h<1100){
			$(".LeaderVersion>h1").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion>p").css("-webkit-transform","translateX(0)")
			$(".imggroup").css("-webkit-transform","translateX(0)")
			$(".contentAll").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1+p").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>h1").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>p").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion div").css("-webkit-transform","rotate(0)");
		}else if(h>=900&h<1000){
			$(".LeaderVersion>h1").css("-webkit-transform","translateX(0)")
			$(".LeaderVersion>p").css("-webkit-transform","translateX(0)")
			$(".imggroup").css("-webkit-transform","translateX(0)")
			$(".contentAll").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1+p").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>h1").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>p").css("-webkit-transform","translateX(0)")
		}else if(h>=600&h<900){
			$(".imggroup").css("-webkit-transform","translateX(0)")
			$(".contentAll").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1+p").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>h1").css("-webkit-transform","translateX(0)")
			$(".GreatOriginality>p").css("-webkit-transform","translateX(0)")
		}else if(h>=320&h<600){
			$(".imggroup").css("-webkit-transform","translateX(0)")
			$(".contentAll").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1+p").css("-webkit-transform","translateX(0)")
		}else if(h>=200&h<320){
			$(".imggroup").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1+p").css("-webkit-transform","translateX(0)")
		}else if(h>=40&h<200){
			$(".InternetTravelFinance>h1").css("-webkit-transform","translateX(0)")
			$(".InternetTravelFinance>h1+p").css("-webkit-transform","translateX(0)")
		}
	}
})