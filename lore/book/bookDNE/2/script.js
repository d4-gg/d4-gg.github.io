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
    .addScene('tell1:뼛속까지 과학자인 애셔 미르가 가장 먼저 보인 반응은 그 망할 것을 향해 무기를 발사하는 것이었다.', 850)
    .addScene('tell1:피라미드가 이오의 대기권으로 침투했다. 충분한 속도로 투사체를 발사하면 타격할 수도 있을 만큼 가까운 거리였다.', 850)
    .addScene('tell1:애셔는 눈을 두 번 깜빡하는 사이에 공격 각도와 투사체의 질량을 파악해냈다.', 850)
    .addScene('tell1:애셔는 커피가 식기도 전에 장착식 레일건을 완성했다.', 850)
    .addScene('tell1:그는 자력 코일을 충전하고, 바람이 잦아들기를 기다린 후, 우주선 측면을 공격했다.', 850)
    .addScene('tell1:그는 투사체가 물리 보호막과 충돌하거나, 잘하면 피라미드에 적중하여 극미한 피해를 줄 수도 있을 것으로 예상했다.', 850)
    .addScene('tell1:하지만 적중 순간, 투사체는 존재하지 않았다.', 850)
    .addScene('tell1:애셔는 미간을 잔뜩 찌푸렸지만 억누를 수 없는 미소가 얼굴 가득 번졌다. 그의 금속 팔이 스스로 딸깍 소리와 함께 희미하게 윙윙거리기 시작했다.', 850)
    .addScene('tell1:그의 실험실 앞에 멋대로 주차를 하고 이런 조악한 속임수를 쓰다니, 정말 뻔뻔한 피라미드였다.', 850)
    .addScene('tell1:분명히, 애셔 미르를 만날 줄은 몰랐을 것이다.', 850)
    .addScene('tell1:그는 미사일을 하나 더 조립했다. 이번에는 추적 가능한 방사능 식별자와 무선 신호도 탑재했다. 그리고 피라미드를 향해 미사일을 발사했다.', 850)
    .addScene('tell1:앞선 투사체와 비슷하게 미사일은 적중 순간 사라졌고, 신호 역시 소멸되어 이오의 표면 위에서 더는 찾아볼 수가 없었다.', 850)
    .addScene('tell1:또 하나의 탄두가 그 뒤를 따라갔다. 이번에는 초소형 중계기였다. 그는 중계기를 콘솔에 연결한 후 발사했다.', 850)
    .addScene('tell1:피라미드와 접촉하는 순간, 중계기에서 방출되는 방사능과 무선 신호가 급작스럽게 치솟았다.', 850)
    .addScene('tell1:애셔는 능글맞게 웃었다. 지금까지 쏘아 보낸 것들은 모두 피라미드의 장막에 붙잡힌 채 그대로 남아 있었다.', 850)
    .addScene('tell1:시각적으로는 감지할 수 없고 신호도 억제되어 있지만, 물리적으로는 거기 있었다.', 850)
    .addScene('tell1:피라미드가 어떻게 이런 놀라운 일을 할 수 있는 건지는 아직 알 수 없었지만, 영점 에너지에 관한 환상이 그의 머릿속에 물밀듯 밀려들었다.', 850)
    .addScene('tell1:그를 머뭇거리게 한 건 본질적인 의문이었다.', 850)
    .addScene('tell1:저 우주선은 제 혐오스러운 형체 주위에 투사체를 멈춰 두고 뭘 하려는 걸까?', 850)
    .addScene('tell1:그리고 그 이유는 무엇일까?', 850)
   