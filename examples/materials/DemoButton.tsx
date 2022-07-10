/* eslint-disable @typescript-eslint/naming-convention */
import styled from '@emotion/styled'
import Button from '../../source/materials/Button'
import Gap from '../../source/materials/Gap'

// css 变量 --j_组件名_组件部分_属性
// 属性
// a {
//   /* bg */
//   background: fixed;
//   /* clr */
//   color: aliceblue;
//   /* fs */
//   font-size: large;
//   /* w */
//   width: 12;
//   /* h */
//   height: auto;
//   /* bdr */
//   border-radius: 0%;
//   /* pd */
//   padding: 0%;
//   /* mr */
//   margin: auto;
//   /* bd */
//   border: 0ch;
//   /* bsd */
//   box-shadow: inset;
// }

const Wrap = styled.div({
  '--j_btn_bd': '1px solid #d9d9d9',
  '--j_btn_bg': '#fff',
  '--j_btn_clr': '#333',
  '--j_btn_bdr': '2px',
  '--j_btn_main_bg': '#1890ff',
  '--j_btn_main_clr': '#fff',
  '--j_btn_danger_bg': '#ff4d4f',
  '--j_btn_danger_clr': '#ff4d4f',
  '--j_btn_disable_bg': '#f5f5f5',
  '--j_btn_disable_clr': '#00000040',
})

const DemoButton = () => {
  const onTap = e => {
    console.log(e)
  }

  return (
    <Wrap>
      <Gap>
        <Button data={1} onTap={onTap}>
          按 钮
        </Button>
        <Button main>按 钮</Button>
        <Button main danger>
          按 钮
        </Button>
        <Button main danger active>
          按 钮
        </Button>
        <Button main danger active disable>
          按 钮
        </Button>
      </Gap>
    </Wrap>
  )
}

export default DemoButton
