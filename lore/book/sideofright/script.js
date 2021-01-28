/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

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
    .addScene('tell1:이유는 틀렸더라도 옳은 일은 옳은 일입니다.', 850)
    .addScene('tell1:페트라는 거미가 너무 많은 걸 묻지 않기를 바랬다.', 850)
    .addScene('tell1:이제는 실망하는 데 익숙해질 때도 됐다.', 850)
    .addScene('tell1:"마지막으로 널 봤을 때는 여왕과 대공의 죽음을 슬퍼하고 있었던 것 같은데. 뭐가 바뀐 거지?"', 850)
    .addScene('tell1:페트라는 칼을 꺼내 갈기 시작했다.', 850)
    .addScene('tell1:날카로운 날을 보면 늘 마음이 누그러졌다. 더 날카로울수록 더 좋다.', 850)
    .addScene('tell1:"그리고 뭐가 바뀌지 않은 거지?"', 850)
    .addScene('tell1:거미는 빙그레 웃었다.', 850)
    .addScene('tell1:너희 종족에게는 이런 류의 일에 대한 법이 있지 않나?" 재판, 배심원, 판결, 이딴 거 있지 않아?"', 850)
    .addScene('tell1:페트라는 칼을 던졌다. 그리고는 정신의 힘으로 칼을 잡았다.', 850)
    .addScene('tell1:칼은 그녀의 머리 위에서 희미한 불빛에 반짝였다', 850)
    .addScene('tell1:그리고는 다시 그녀의 손바닥으로 떨어졌다.', 850)
    .addScene('tell1:"울드렌에게 걸맞은 판결은 나 뿐이야."', 850)