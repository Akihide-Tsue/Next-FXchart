import styles from './About.module.scss'
const About = () => {

  return (
    <div>
      <div className={styles.head}>FX収支データを管理するアプリ</div>
      <div >作成中です。11月中に完成予定。</div>
      <div className={styles.title}>概要</div>
      <div>使用技術：  </div>
      <div>フロント：React(Next.js)、バックエンド：Gas、DB：スプレッドシート、サーバー：Firebase、 </div>
      <div><a href={'https://github.com/Akihide-Tsue/Next-FXchart'} target="_blank" rel="noopener noreferrer">GitHubのリポジトリ </a></div>
      {/* <div><a href="https://script.google.com/d/1giLwqVEr1rRPbuRa2EoLQcoZtItsYfyx8QF_E00cuuzEA4bTfoSovSB1/edit?uiv=2&mid=ACjPJvElQeUpX-ueMgM-LRnpPZTjEUlteOXgmIxqci3b3sERhOmt-9CCF1AKj_jKnGz5smjBKH01FgK5r_fMEZsvXYa1yxnWv3uuAkIyBdbIMgaY0ICtPi8AJbIlmjezSFOwq8xwf30ovbyPzIt7meOd4lMb1IbwE5RUWA6U8uuUtdYnbTkRoSiLtNPI2w&splash=yes" target="_blank" rel="noopener noreferrer">作成したGASコード</a></div>
      <div><a href="https://docs.google.com/spreadsheets/d/13HnYM4pzctjnXAruWXo6aG732X05ga3vGhFgRT7T8Os/edit#gid=1853289082" target="_blank" rel="noopener noreferrer">作成したスプレッドシートデータ</a></div> */}
      <div className={styles.title}>目次</div>
      <div>０．概要</div>
      <div>１．スプレッドシートに記録している月別の収支データを表示。メモをスプレッドシートに登録</div>
      <div>２．証券会社からSVCで出力される全取引データを加工し表示</div>
      <div>３．SVCをダウンロード</div>
      <div>４．月別の達成目標額をチャート管理、複利%を計算しチャートで可視化</div>
      <div>５．２のデータを加工し、取引状況をチャート分析</div>
      <div>６．その他.....</div>
      <div className={styles.title}>機能（検討中）</div>
      <div>チャートで可視化:</div>
      <div>SL別の保持期間、SLの比率（利益額、取引枚数）、取引pips，資産増加率、等</div>
      <div>FXのAPIを取得しZarチャートに取引履歴を表示？？検討</div>
    </div>
  )
}

export default About;
