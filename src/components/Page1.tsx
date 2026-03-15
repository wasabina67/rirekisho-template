import photo from '../assets/photo.jpg'
import Box from './Box'
import HistoryTable from './HistoryTable'

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

const EDUCATION = [
  { year: 2015, month: 4, content: '東京都立○○高等学校 入学' },
  { year: 2018, month: 3, content: '東京都立○○高等学校 卒業' },
  { year: 2018, month: 4, content: '○○大学 工学部 情報工学科 入学' },
  { year: 2022, month: 3, content: '○○大学 工学部 情報工学科 卒業' },
] as const

const WORK = [
  { year: 2022, month: 4, content: '株式会社○○ 入社' },
  { year: 2022, month: 4, content: 'システム開発部に配属' },
  { year: 2024, month: 9, content: '一身上の都合により退職' },
] as const

const LICENSES = [
  { year: 2020, month: 6, content: '普通自動車第一種運転免許 取得' },
  { year: 2021, month: 11, content: '基本情報技術者試験 合格' },
  { year: 2023, month: 6, content: '応用情報技術者試験 合格' },
] as const

function formatDate(): string {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()
  return `${year}年${month}月${day}日 現在`
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
          <p className="date">{formatDate()}</p>
        </div>

        <table className="profile-info">
          <colgroup>
            <col style={{ width: '100px' }} />
            <col />
            <col style={{ width: '120px' }} />
            <col style={{ width: '120px' }} />
          </colgroup>
          <tbody>
            <tr>
              <th className="furigana">ふりがな</th>
              <td className="furigana-value" colSpan={2}>{PROFILE.furigana}</td>
              <td rowSpan={3} className="photo"><img src={photo} alt="証明写真" /></td>
            </tr>
            <tr>
              <th className="name">氏名</th>
              <td className="name-value" colSpan={2}>{PROFILE.name}</td>
            </tr>
            <tr>
              <th className="birthday">生年月日</th>
              <td className="birthday-value">{PROFILE.birth.year}年{PROFILE.birth.month}月{PROFILE.birth.day}日 (満 {calcAge(PROFILE.birth)} 歳)</td>
              <td className="gender">性別: {PROFILE.gender}</td>
            </tr>
          </tbody>
        </table>

        <table className="contact-info">
          <colgroup>
            <col style={{ width: '100px' }} />
            <col />
            <col style={{ width: '120px' }} />
            <col style={{ width: '120px' }} />
          </colgroup>
          <tbody>
            <tr>
              <th className="furigana">ふりがな</th>
              <td className="furigana-value" colSpan={3}>{CONTACT.furigana}</td>
            </tr>
            <tr>
              <th>現住所</th>
              <td colSpan={3}>
                <span>〒{CONTACT.postalCode}</span>
                <br />
                <span>{CONTACT.address}</span>
              </td>
            </tr>
            <tr>
              <th>連絡先</th>
              <td>{CONTACT.phone}</td>
              <td colSpan={2}>{CONTACT.email}</td>
            </tr>
          </tbody>
        </table>

        <HistoryTable title="学歴" rows={EDUCATION} />
        <HistoryTable title="職歴" rows={WORK} />
        <HistoryTable title="免許・資格" rows={LICENSES} />

        <Box title="志望動機">
          貴社の先進的な技術力と幅広い事業領域に魅力を感じ、志望いたしました。
          前職ではWebアプリケーションの開発に携わり、要件定義から運用まで一貫して経験いたしました。
          これまでの経験を活かし、貴社の事業発展に貢献したいと考えております。
        </Box>
        <Box title="本人希望記入欄">
          勤務地・職種など、貴社の規定に従います。
        </Box>
      </article>
    </section>
  )
}

export default Page1
