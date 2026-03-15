import Box from './Box'

function Page2() {
  return (
    <section className="sheet padding-10mm">
      <article className="rirekisho">
        <Box title="趣味">読書（技術書・ビジネス書）、ランニング、カフェ巡り</Box>
        <Box title="特技">タイピング（e-typing スコア400以上）、英語（TOEIC 750点）</Box>
        <Box title="自己PR・アピールポイント">
          前職では3名のチームでWebアプリケーションの開発を担当し、設計からテスト・運用まで一貫して携わりました。
          特にコードレビューの文化を推進し、チーム全体の品質向上に貢献いたしました。
          新しい技術への学習意欲が高く、業務外でも個人開発やOSSへの貢献を行っております。
        </Box>
      </article>
    </section>
  )
}

export default Page2
