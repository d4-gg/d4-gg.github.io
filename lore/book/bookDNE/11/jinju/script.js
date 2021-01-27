

var theater = theaterJS({ erase: 450})

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'tell1') {
      document.body.classList.add('dark')
    } else {
     document.body.classList.add('dark')
    }
  })

theater
  .addActor('tell1', { speed: 0.8,accuracy: 1 })
    .addScene('tell1:아나 브레이의 고스트', 850)
    .addScene('tell1:영어로 진주를 뜻하는 펄이 아니라 정말로 이름이 진주(Jinju)다', 850)
    .addScene('tell1:아나 브레이가 한국계라는 설정에 맞추어 이름을 설정한 것으로 보인다.', 850)
    .addScene('tell1:진주의 의체는 다소 둥글둥글하게 생겼지만', 850)
    .addScene('tell1:매우 똑부러지고 사무적인 성격을 가지고 있다.', 850)
  