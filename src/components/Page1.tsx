// import photo from '../assets/photo.jpg'

const PROFILE = {
  furigana: 'りれき たろう',
  name: '履歴 太郎',
  birth: { year: 2000, month: 1, day: 1 },
  gender: '男',
} as const

const CONTACT = {
  furigana: 'とうきょうと ちよだく ちよだ',
  postalCode: '100-0001',
  address: '東京都 千代田区 千代田1-1',
  phone: 'xxx-xxxx-xxxx',
  email: 'taro@example.com',
} as const

function formatWarekiDate(): string {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const reiwaYear = year - 2018
  return `令和${reiwaYear}年${month}月${day}日 現在`
}

function calcAge({ year, month, day }: { year: number; month: number; day: number }): number {
  const today = new Date()
  let age = today.getFullYear() - year
  const m = today.getMonth() + 1 - month
  if (m < 0 || (m === 0 && today.getDate() < day)) age--
  return age
}

function Page1() {
  return (
    <section className="sheet padding-10mm">
      <article className="rirekisho">
        <div className="header">
          <h1>履 歴 書</h1>
          <p className="date">{formatWarekiDate()}</p>
        </div>

      </article>
    </section>
  )
}

export default Page1
