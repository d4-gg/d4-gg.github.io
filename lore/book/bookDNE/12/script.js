
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
    .addScene('tell1:수호자가 마지막으로 그의 성소를 떠난 후, 반스 형제는 얼마 되지 않는 소지품을 챙겨 수성의 타오르는 듯한 표면으로 나섰다.', 850)
    .addScene('tell1:그는 머릿속으로 끝없이 연습했던 것처럼 무한의 숲 입구를 손쉽게 찾아냈다.', 850)
    .addScene('tell1:그리고 이번에는 그곳을 통과했다.', 850)
    .addScene('tell1:숲이 포효했다. 아찔한 공허가 그를 강타했다. 메아리에는 아무 의미도 없었다.', 850)
    .addScene('tell1:그는 신성한 장소를 향해 첫걸음을 내디딘 후 무릎을 꿇고 토했다.', 850)
    .addScene('tell1:돌풍이 고막을 때리는 가운데 그는 짐을 끌고 가려고 발버둥쳤다.', 850)
    .addScene('tell1:그는 이 광대한 공간에서 불가능하게 작은 무한의 시뮬러크럼을 꺼내고, 떨리는 손으로 숲의 찢어지는 듯한 주파수에 동기화했다. ', 850)
    .addScene('tell1:시뮬러크럼은 잠시 메트로놈처럼 재깍거리다가…', 850)
    .addScene('tell1:침묵했다. 숲이 봉인되었다.', 850)
    .addScene('tell1:반스는 망설이는 손길로 지금 서 있는 거대한 돌을 더듬었다.', 850)
    .addScene('tell1:그와 동시에, 헤아릴 수 없을 만큼 여러 번 경험한 것처럼 그 돌을 어렵지 않게 뛰어넘었다. ', 850)
    .addScene('tell1:그와 동시에, 그는 하늘 높이 솟아올랐다.', 850)
    .addScene('tell1:그는—떨어지고, 웃고, 노래하며—모든 방향으로 움직였다. ', 850)
    .addScene('tell1:모든 길을 따라 모든 현실로 향하며 희망의 메시지를 전파했다.', 850)
    .addScene('tell1:그리고 본래의 진짜 반스는 무한한 평행의 존재들이 자신에게서 솟구쳐 분출되는 것을 느꼈다. ', 850)
    .addScene('tell1:그들이 스쳐 지나며 그에게 힘을 주는 것을 느꼈다.', 850)
    .addScene('tell1:그는 기쁨에 숨이 벅차 고맙다고 소리 없이 말했고, 헤아릴 수 없이 많은 손길이 자신을 안심시키기 위해 도닥이는 것을 느꼈다.', 850)
    .addScene('tell1:어느새 그는 울고 있었다.', 850)
    .addScene('tell1:그때, 황금빛 메아리의 소용돌이 안에서, 반스 형제는 목소리를 드높여 그의 노래를 부르기 시작했다.', 850)
    .addScene('tell1:"희망의—"', 850)
    .addScene('tell1:그 자신의 목소리가 뒤쪽에서 답했다. "미래여." 노래는 계속되었다.', 850)
    .addScene('tell1:반스는 그 목소리를 향해 뛰었다.', 850)
    .addScene('tell1:그는 자기 망토의 느낌을 인지하고, 그의 손이 그 목덜미를 찾았다.', 850)
    .addScene('tell1:형태가 뒤틀리고, 그의 손 아래에서 차갑고 날카롭고 변해갔다.', 850)
    .addScene('tell1:그것이 반스를 내동댕이치려 했지만, 그는 버텼다.', 850)
    .addScene('tell1:그리고 그것의 얼굴을 향해, 그 눈가리개 안쪽으로 손을 뻗었고, 엄지손가락을 박아넣었다.', 850)
    .addScene('tell1:그것은 울부짖었다. 정말 안타깝구나.', 850)
    .addScene('tell1:반스는 환하게 웃으며 생각했다. 아직 눈이 남아 있다니.', 850)