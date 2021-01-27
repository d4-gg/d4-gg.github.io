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
    .addScene('tell1:음악이 명료하게 들려왔다. 반스 형제는 영광에 심취한 표정으로 귀를 기울였다.', 850)
    .addScene('tell1:"반복되는군." 그는 자신과 어린 워록을 향해 속삭였다.', 850)
    .addScene('tell1:그 워록은 무한의 대장간 위로 허리를 구부리고 바지런히 다른 시대의 무기를 제작하고 있었다.', 850)
    .addScene('tell1:그녀는 공손히 귀를 기울였지만 아무것도 들리지 않았다. 그래서 그냥 하던 일을 계속했다.', 850)
    .addScene('tell1:"왜 아무도 불사조를 가엾게 생각하지 않는 거지?"', 850)
    .addScene('tell1:워록은 깜짝 놀라 고개를 들었다. 반스는 그녀가 모르는 사이 다가와 어느새 반대쪽에 서 있었다.', 850)
    .addScene('tell1:그는 두 사람이 대화를 하고 있었기라도 한 것처럼 뜬금없이 물었다.', 850)
    .addScene('tell1:"뭐라고요?" 워록이 반문했다.', 850)
    .addScene('tell1:"끝없는 부활도 좋지만 그 끝은 항상 타오르는 죽음뿐." 반스가 말했다.', 850)
    .addScene('tell1:"깃에서 재를 다 털어내기도 전에 다시 불길 속으로 떨어지지 않는가."', 850)
    .addScene('tell1:눈먼 남자는 돌아서서 반짝이며 성소 안으로 쏟아져 들어오는 햇살을 얼굴에 만끽했다.', 850)
    .addScene('tell1:"하지만 어느 누구도 그 노래에 관해 이야기하지 않지."', 850)
    .addScene('tell1:워록은 반스에게 대장간을 쓰게 해 줘서 고맙다고 인사를 한 후 일어서 떠나려 했다.', 850)
    .addScene('tell1:"얼마든지 써도 좋아." 그는 고개도 돌리지 않고 말했다.', 850)
    .addScene('tell1: 하지만 공허한 미소는 어느새 조금 더 친절한 표정으로 바뀌어 있었다. 그는 책상 위에 놓인 고서와 두루마리를 향해 손짓했다.', 850)
    .addScene('tell1:"예언도 마음대로 가져가도 돼, 친구." 그는 말했다. "드디어 내 연구가 끝난 것 같거든."', 850)

  