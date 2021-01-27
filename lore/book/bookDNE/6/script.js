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
    .addScene('tell1:부사령관 슬론은 기분이 매우 언짢았고, 불행히도, 아만다 홀리데이는 그 사실을 전혀 알지 못했다.', 850)
    .addScene('tell1:타이탄의 파도가 사이렌의 감시의 거대한 버팀대에 끊임없이 부딪혔다.', 850)
    .addScene('tell1:사정이 지금과 달랐다면 지원 요원들이 내려와 매머드의 다리 사이를 이리저리 오가며 수리하고 안정화하느라 바삐 움직이고 있었을 것이다.', 850)
    .addScene('tell1:하지만 사정은 다르지 않았다.', 850)
    .addScene('tell1:"그냥 박스교를 대충 만들어서 보강하면 돼. 아무 문제 없어." 아만다가 말했다.', 850)
    .addScene('tell1:"당신이라면 그럴 수 있겠지. 난 안 돼." 슬론이 말했다. 그녀도 장벽 몇 개 정도는 건설해 본 적이 있지만', 850)
    .addScene('tell1:아만다처럼 부러움을 살 만한 공학적 지식은 없었다. 아쉽게도 아만다는 가르치는 소질은 별로 없는 것 같았다.', 850)
    .addScene('tell1:아만다의 홀로그램이 라면을 후루룩 먹었다. "얼마나 견뎌야 하는데?"', 850)
    .addScene('tell1:"내가 신경을 끌 수 있을 정도만 버텨 주면 돼." 슬론이 대답했다.', 850)
    .addScene('tell1:"그게 흔들리기 시작한 뒤부터는 피라미드 걱정을 할 새도 없었거든."', 850)
    .addScene('tell1:"그나마 다행이네!" 아만다가 재잘거렸다. 슬론은 거친 머리카락을 손으로 쓸어 넘겼다.', 850)
    .addScene('tell1:"잘 생각해 봐." 아만다가 끙, 하는 소리를 냈다. "당신은 타이탄에서 황금기의 기술 무더기를 깔고 앉아 있잖아.', 850)
    .addScene('tell1:거기 있는 엔그램 중에 다리가 들어 있는 게 하나는 있지 않겠어?"', 850)
    .addScene('tell1:슬론은 심드렁한 눈빛으로 상대를 바라봤다.', 850)
    .addScene('tell1:그 말이 사실일 수도 있지만, 지금은 사라진 기술을 뒤적거릴 시간이 없었다.', 850)
    .addScene('tell1:"그러면 방파제를 만들어! 테트라포드를 버팀목에 고정해 두거나,', 850)
    .addScene('tell1:아니면 바다 한가운데에 뭐든 세워서 파도가 일찍 부서지게 하는 거지."', 850)
    .addScene('tell1:"파도가 와서 부딪히는 걸 견딜 수 없다면, 미리 밖으로 나가서 파도가 본격적으로 시작되기 전에 부딪혀 버리라고.', 850)
    .addScene('tell1:이렇게 말이야!" 아만다는 몸을 앞으로 기울이고 라면 그릇 안에서 무언가 시범을 보였다.', 850)
    .addScene('tell1:그녀는 웃음을 터뜨렸다.', 850)
    .addScene('tell1:"이제 끊을게." 슬론이 말했다.', 850)
    .addScene('tell1:아만다가 쾌활하게 손을 흔들고 과장되게 입술을 내밀어 인사한 후, 그녀는 통신을 끊었다.', 850)
    .addScene('tell1:홀로그램이 사라지고 슬론은 어둠 속에 혼자 남았다. 그리고 거기 오랫동안 남아 있었다.', 850)