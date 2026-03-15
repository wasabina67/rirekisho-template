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
  { year: 2000, month: 1, content: 'wip' },
] as const

const WORK = [
  { year: 2000, month: 1, content: 'wip' },
] as const

const LICENSES = [
  { year: 2000, month: 1, content: 'wip' },
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
              <td rowSpan={3} className="photo"><img src={photo} /></td>
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
              <td colSpan={3}>{CONTACT.furigana}</td>
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

        <Box title="志望動機">プレースホルダー</Box>
        <Box title="本人希望記入欄">プレースホルダー</Box>
      </article>
    </section>
  )
}

export default Page1
