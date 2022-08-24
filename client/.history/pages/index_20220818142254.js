import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { DatePicker } from 'antd';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
    <div className="">
      Hello world!
      <i className="fa-brands fa-facebook-f text-blue-500"></i>
      <DatePicker/>
    </div>
    </Layout>
  )
}
