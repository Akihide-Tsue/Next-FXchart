import styles from './About.module.scss'
const About = () => {

  return (
    <div>
      <div >作成中です。11月上旬完成予定</div>
      <div >開発中にAPIの通信上限回数に達した場合はデータが取得できないかもしれません...</div>
      <div className={styles.title}>概要</div>
      <div>FX収支データを管理するアプリ</div>
      <div>使用技術： Next.js、 Firebase、 Gas</div>
      <div><a href={'https://github.com/Akihide-Tsue/Next-FXchart'}>GitHubのリポジトリ </a></div>
      <div><a href="">作成したGASコード</a></div>
      <div><a href="">作成したスプレッドシートデータ</a></div>
      <div className={styles.title}>目次</div>
      <div>０．概要</div>
      <div>１．スプレッドシートに記録している月別の収支データを表示</div>
      <div>２．SVCで出力される全取引データを加工し表示</div>
      <div>３．SVCをダウンロード</div>
      <div>４．月別の達成目標額をスプレッドシートにPUT</div>
      <div>５．その他.....</div>
      <div className={styles.title}>機能（予定含む）</div>
      <div>Chart.jsで可視化:保持期間、利益、S,Lの比率、取引pips，資産伸び率、Zarチャートに取引したポイントを写す、等</div>
    </div>
  )
}

export default About;
