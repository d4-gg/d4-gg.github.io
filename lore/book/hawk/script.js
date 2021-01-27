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
  .addActor('tell1', { speed: 0.8 , accuracy: 1 })
  .addScene('tell1:이 기분은 무엇이지?', 850)
  .addScene('tell1:내가 요청한 것이 아니다. 이해할 수 없군. 난 원치 않는다.', 850)
  .addScene('tell1:무지한 까마귀는 아무 걱정 없이 지내고 있다. 모닥불의 빛이 그의 창백한 모습을 비추고, ', 850)
  .addScene('tell1:나는 그의 황금빛 눈에 어린 희망에 이끌린다. ', 850)
  .addScene('tell1:내가 예상했던 절망에 빠진 아이는 어디에 있지?', 850)
  .addScene('tell1:그는 고스트의 만류에도 병을 들고 와인을 마신다. 수호자가 그를 격려하고, 두 사람은 웃음을 터뜨린다. ', 850)
  .addScene('tell1:이렇게 축하하고 있다니, 정말 미칠 노릇이다. 두 사람 다 이렇게 의기양양할 이유가 없을 텐데. ', 850)
  .addScene('tell1:그들의 세계는 끝나 가고 있고, 그들은 붕괴하는 별의 마지막 빛에 사로잡혀 죽어가는 짐승들처럼 발버둥치고 있다. ', 850)
  .addScene('tell1:그들은 자기 존재가 얼마나 무가치한지 모른다. ', 850)
  .addScene('tell1:우주의 소멸 앞에서 자기들이 얼마나 덧없는 존재인지 모르고 있다.', 850)
  .addScene('tell1:이제 수호자가 불에 가까이 선 채 마시고 있다.', 850)
  .addScene('tell1:그들의 고스트도 그러지 말라고 설득하는 중이다. ', 850)
  .addScene('tell1:그들은 그저 즐겁다는 이유로 스스로 독에 중독되고 있다.', 850)
  .addScene('tell1:자매들이 떠오른다.', 850)
  .addScene('tell1:파도가 철썩이는 해안에서 새로운 가능성과 놀라움으로 가득 찬 끝없는 별을 올려다 보았던 순간들이 떠오른다.', 850)
  .addScene('tell1:나는 지금도 동경하고 있다.', 850)
  .addScene('tell1:이 기분은 무엇이지? 이해할 수 없군. 난 원치 않는다.', 850)
  .addScene('tell1:그들은 굴복자에 대한 승리를 자축하고 있다. 까마귀는 한 손으로 총 모양을 만들고', 850)
  .addScene('tell1:다른 손으로는 거의 빈 와인 병을 칼처럼 휘두르고 있다.', 850)
  .addScene('tell1:수호자는 불가의 바위 위에 앉아 생각에 잠겨 있다. ', 850)
  .addScene('tell1:그들이 지키는 비밀을 곰곰이 생각하는 모양이다.', 850)
  .addScene('tell1:까마귀도 그런 모습을 눈치채지만, 따로 티를 내지는 않는다. ', 850)
  .addScene('tell1:그는 수호자가 기운을 차리게 해주려 한다. ', 850)
  .addScene('tell1:함께 승리의 기쁨을 나눌 수 있도록 지지해 주려 한다.', 850)
  .addScene('tell1:동등한 존재로서.', 850)
  .addScene('tell1:고향이 떠오른다. 태양과 내 가족의 품에서 느껴지던 온기가 떠오른다. ', 850)
  .addScene('tell1:아버지의 얼굴이 떠오른다. 내가 배신한 모든 이들이 떠오른다. ', 850)
  .addScene('tell1:불멸이라는 이름 아래 흘렸던 모든 피. 태양의 온기가 그 기억으로 나를 불태우고 있다.', 850)
  .addScene('tell1:이 기분은 무엇이지?', 1200)
  .addScene('tell1:난 원치 않는다.', 850)
  .addScene('tell1:불이 거의 꺼졌다. 까마귀는 쓰러졌다.', 850)
  .addScene('tell1: 괜찮다고 말은 하지만 일어나지 못한다. 수호자는 칼끝으로 불씨를 뒤적이고 있다.', 850)
  .addScene('tell1: 고스트들은 서로 이야기하며 조용히 음모를 꾸미고 있다.', 850)
  .addScene('tell1:자축연은 종료되었지만, 그들의 감정이 복합적이라는 것을 느낄 수 있다.', 850)
  .addScene('tell1:그들은 수많은 복잡한 생각에 사로잡혀 있다.', 850)
  .addScene('tell1:지금은 단 하나의 단순한 문제에 집중하는 것만으로도 충분할 텐데.', 850)
  .addScene('tell1:연대감이 커지고 있다. 그와 함께 판단력은 흐려져 간다.', 850)
  .addScene('tell1:이 기분은 무엇이지?', 850)
  
 