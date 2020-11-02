import styles from './About.module.scss'
const About = () => {

  return (
    <div>
      <div className={styles.head}>FX収支データを管理するアプリ</div>
      <div >作成中です。11月中に完成予定。</div>

      <div className={styles.github}>
        <a
          href={'https://github.com/Akihide-Tsue/Next-FXchart'}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}>
          GitHubのリポジトリ
        </a>
      </div>

      <div className={styles.title}>目次</div>
      <div>０．概要</div>
      <div>１．スプレッドシートに記録している月別の収支データを表示。</div>
      <div>２．証券会社から出力される全取引CSVデータを加工し表示</div>
      <div>３．オリジナルのCSVをダウンロード</div>
      <div>４．月別の達成目標額をチャート管理、複利%を計算しチャートで可視化</div>
      <div>５．取引状況をチャート分析（２のデータを加工）</div>
      <div>６．最適な証拠金維持率を計算　</div>
      <div>７．その他..... (予定：fxチャート)</div>

      <div className={styles.title}>機能（検討中も）</div>
      <div>１．スプレッドシートにメモをputし登録。</div>
      <div>FXのAPIを取得しZarチャートに取引履歴を表示？？検討</div>

      <div className={styles.title}>使用技術</div>
      <div>フロント：React(Next.js)</div>
      <div>バックエンド：GAS</div>
      <div>DB：スプレッドシート</div>
      <div>サーバー：Firebase</div>
    </div>
  )
}

export default About;
