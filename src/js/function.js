$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  console.log(wScroll);

  //let translateY = -50 + (wScroll / 5);  // ตัวอย่างเลื่อนลงทีละนิดจาก -50%
  let translateY = wScroll / 3;
  $(".sun-helios").css({
    transform: "translateY(" + translateY + "%)",
  });
  $(".moon").css({
    transform: "translateY(" + wScroll / 2 + "%)",
  });

  $(".line").css({
    transform: "translateX(-" + wScroll / 5 + "%)",
  });
  $(".is-showing").css({
    transform: "translateX(-" + wScroll / 9 + "%)",
  });

  if (wScroll > $(".trojan-war").offset().top - $(window).height() / 1.0) {
    console.log("pic-Gods is in view");
    $(".trojan-war").each(function (i) {
      const that = $(this); // เก็บ this ไว้ใช้ใน setTimeout
      setTimeout(() => {
        that.addClass("is-showing");
      }, 150 * (i + 1));
    });
  }
  const $container = $("#horse-container");
  const triggerPoint = $container.offset().top - $(window).height() / 1.5;

  if (wScroll > triggerPoint) {
    // แยกรูปออกจากกัน
    $("#horse-left").css("transform", "translateX(-400px)");
    $("#horse-right").css("transform", "translateX(400px)");
  } else {
    // กลับมารวมกัน
    $("#horse-left").css("transform", "translateX(0)");
    $("#horse-right").css("transform", "translateX(0)");
  }

  const $containermedusa = $("#medusa-container");
  const $medusa = $("#medusa");
  const triggerPointmedusa =
    $containermedusa.offset().top - $(window).height() / 1.5;

  if (wScroll > triggerPointmedusa) {
    $medusa.css({
      opacity: 1,
      transform: "translateY(0)",
    });
  } else {
    $medusa.css({
      opacity: 0,
      transform: "translateY(40px)", // ขึ้นอยู่กับความสูงที่อยากให้มันซ่อน
    });
  }

  const $containerorpheus = $("#orpheus-container");
  const $image = $("#orpheus-image");
  const containerTop = $containerorpheus.offset().top;
  const containerHeight = $containerorpheus.outerHeight();
  const windowHeight = $(window).height();

  const scrollProgress =
    (wScroll + windowHeight - containerTop) / (windowHeight + containerHeight);

  // Clamp scrollProgress between 0 and 1
  const progress = Math.max(0, Math.min(1, scrollProgress));

  // คำนวณตำแหน่งเลื่อน: ยิ่งเลื่อนลงมาก → ยิ่งเลื่อนไปซ้ายบน
  const moveX = 150 * progress; // เลื่อนซ้ายได้สูงสุด -50px
  const moveY = -50 * progress; // เลื่อนขึ้นได้สูงสุด -30px
  $image.css("transform", `translate(${moveX}px, ${moveY}px)`);


const trigger = $('#intro-sentence').offset().top - $(window).height() / 1.5;
  if (wScroll > trigger) {
    $("#intro-sentence .word").each(function (i) {
      $(this)
        .removeClass(
          "opacity-0 translate-x-20 -translate-x-20 translate-y-20 -translate-y-20"
        )
        .addClass("opacity-100 translate-x-0 translate-y-0");
    });
  }
});
