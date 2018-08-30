// !IMPORTANT ensure jquery is loaded first!

// TABLE OF CONTENTS:
// 1- CSS CLASS that you want to use for a trigger (demo uses: ".ScrollmateTrigger")
// 2- CSS CLASS that trigger should scroll to (demo uses: ".ScrollmateTriggerArea")
// 3- Scrollmate Duration (in milliseconds) this is the time it takes to travel from .ScrollmateTrigger to the resting area (demo uses: 1250 and 500)

// FROM ScrollmateTrigger TO ScrollmateTriggerArea
$(function() {
	$(".ScrollmateTrigger").on("click", function() { // (1)
		var position = $(".ScrollmateTriggerArea").offset().top; // (2)
		$("HTML, BODY").animate({ scrollTop: position }, 1250); // (3)
	});
});

// FROM ScrollmateReturnTrigger TO ScrollmateTrigger
$(function() {
	$(".ScrollmateReturnTrigger").on("click", function() { // (A)
		var position = $(".ScrollmateReturnArea").offset().top; // (B)
		$("HTML, BODY").animate({ scrollTop: position }, 500); // (C)
	});
});
