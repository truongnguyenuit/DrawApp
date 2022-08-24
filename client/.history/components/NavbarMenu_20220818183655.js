
import Link from 'next/link'
import { Row, Col } from "antd"

const NavigateRouter = [
  {
    path: '/draw/draw',
    name: "Draw",
  },
  {
    path: '',
    name: "Input",
  },
  {
    path: '',
    name: "List"
  },
  {
    path: '',
    name: "About"
  },
  {
    path: '',
    name: "Logout",
  }
];

const NavbarMenu = () => {
  return (
    <div className="bg-white">
      <Row >

        <Col span={6} className="h-14">
          <div className="flex justify-center items-center text-[20px] gap-2 h-14">
            <i className="fa-brands fa-facebook-square cursor-pointer"></i>
            <i className="fa-brands fa-twitter-square cursor-pointer"></i>
            <i className="fa-brands fa-instagram-square cursor-pointer"></i>
            <i className="fa-brands fa-pinterest-square cursor-pointer"></i>

          </div>
        </Col>

        <Col span={12} className="h-14">
          <nav>
            <ul className="flex justify-center items-center text-[17px] gap-4 h-14">
              {NavigateRouter.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.path} passHref>
                      <span className='cursor-pointer'>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );

              })}
            </ul>
          </nav>
        </Col>

        <Col span={6} className="h-14">
          <div className="flex justify-center items-center gap-2 h-14">
            <Link href={"/auth/login"}>
              Login
            </Link>
            <Link href={'/auth/register'}>
              Register
            </Link>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default NavbarMenu