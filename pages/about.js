import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'

export default function About () {
  return (
    <Container>
      <Hero
        title='About'
        subtitle='About this site'
      />
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              コーヒーは世界で最も飲まれている飲料です。モカやラテ、フラペチーノなどの甘い飲み物もコーヒーがベースとなっているのはもちろん、コーヒーを飲むことによって病気のリスクが減る研究結果もでています。
            </p>
            <h2>コーヒー豆の違いによって味が変わる</h2>
            <p>
              酸味や苦味、渋みによって味が変わり、様々なシチュエーションによってコーヒーを選んだり、豆の種類、品質、原産国によるテイストの違いを知ればより楽しくコーヒーを味わう事ができます。このサイトでは、コーヒーを知ってもらうために様々な豆を紹介していきます。
            </p>
            <h3>自分のタイミングに合わせて豆を選ぶ</h3>
            <p>原産国の気候、栽培方法など豆の特徴を知り、その違いを比較して楽しんでみてほしいです。
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}
