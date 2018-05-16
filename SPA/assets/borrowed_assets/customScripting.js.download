function fixPaddings(module){
	var $counter = 0;
	$(module + " > ul li").css("width", "auto");
	$(module + " > ul li a").css("width", "auto");

	if ( window.innerWidth > 767 ) {
		var $full_width = parseInt($(module).children("ul").css("width"));
		var $itemsWidth = 0;		$(module).children("ul").children("li").each(function(index, element){
			$itemsWidth += parseInt($(element).css("width"));
			$counter++;
		});
		var $ac = $full_width - $itemsWidth;
		$(module + "> ul li a").each(function(index, element){
			var $indv_ac = $ac/$counter;
			var $thisWidth = parseInt($(element).css("width"));
			$(element).css("width", $indv_ac + $thisWidth + "px");
		});
	}
	if ( window.innerWidth < 767 ) {
		$(module).children("ul").children("li").each(function(index, element){
			$counter++
		});
		$(module + " > ul li").css("width", "50%");
		if ( $counter % 2 > 0 ){
			$(module + " > ul li:last-child").css("width", "100%");
		} 
	}
}

$(document).ready(function(){
	/*$("input, textarea").placeholder();
	$(".sf-menu").superfish({
		cssArrows: false,
		animation: {opacity:' show',height:'show'},
		delay: 800
	});	*/
	$(".menu").click(function(){
		$("ul.sf-menu").slideToggle();
	});	
	fixPaddings(".information-module");
	fixPaddings(".bids-module");
	$(window).resize(function(){
		fixPaddings(".information-module");
		fixPaddings(".bids-module");
	});

	$(".icon-small-orange").each(function(){
		if($(this).hasClass("plus")){
			$(this).parents(".tab-header").next(".tab-content").stop(true, true).slideUp();
		}
		else if ($(this).hasClass("minus")) {
			$(this).parents(".tab-header").next(".tab-content").stop(true, true).slideDown();
		}

	});
	$(".icon-small-orange").click(function(){
		if($(this).hasClass("plus")){
			$(this).removeClass("plus").addClass("minus");
			$(this).parents(".tab-header").next(".tab-content").stop(true,true).slideDown();
		}
		else {
			$(this).removeClass("minus").addClass("plus");
			$(this).parents(".tab-header").next(".tab-content").stop(true,true).slideUp();
		}
		return false;
	});

	$(".icon-orange").each(function(){
		if($(this).hasClass("plus")){
			$(this).parent().next().stop(true,true).slideUp();
		}
		else if ( $(this).hasClass("minus")){
			$(this).parent().next().stop(true,true).slideDown();
		}
	});
	$(".icon-orange").click(function(){
		if($(this).hasClass("plus")){
			$(this).removeClass("plus").addClass("minus");
			$(this).parent().next().stop(true,true).slideDown();
		}	
		else if ($(this).hasClass("minus")){
			$(this).removeClass("minus").addClass("plus");
			$(this).parent().next().stop(true,true).slideUp();
		}
		return false;
	});
	registrationForm();
});

$(document).ready(function() {
	for (i = 2; i <= 8; i++) {
		jQuery(".marketplace-content table#appTable td:nth-child(" + (i + 1) + ")").prepend("<span class='mob-title'>" + jQuery(".marketplace-content table th:nth-child(" + i + ")").text() + "</span>");
	}
	for (i = 2; i <= 8; i++) {
		jQuery(".marketplace-content table#secondary_market_table td:nth-child(" + i + ")").prepend("<span class='mob-title'>" + jQuery(".marketplace-content table th:nth-child(" + i + ")").text() + "</span>");
	}
});

/**
 * Bind registration forms events
 *
 */
function registrationForm() {
	if(window.location.pathname === "/register/"){

		jQuery.validator.addMethod(
			"hasOnlyLowerCase",
			function(value, element) {
				return !value.match(/[A-Z \W]/) && !value.match(/4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blowjob|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunnyfucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpetmuncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cocksucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudgepacker|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jackoff|jap|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|labia|lust|lusting|masochist|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|motherfucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|shag|shagger|shaggin|shagging|shemale|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx/);
			},
			"Username should contain lowercase letters, numbers or the underscore ( _ ) symbol."
		);

		// Validating the form
		jQuery('form#um_form_register').validate({
			rules: {
				user_login: {
					required: true,
					minlength: 7,
					maxlength: 20,
					hasOnlyLowerCase: true
				}
			},
			submitHandler: function(form) {
				// do other things for a valid form
				form.submit();
			},
			errorPlacement: function(error, element) {
				error.insertAfter(element);
			}
		});

	}

}