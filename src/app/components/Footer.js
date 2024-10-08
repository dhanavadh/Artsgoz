'use client'
import {React, Fragment, useState} from 'react';
import { Dialog, Transition, Popover } from '@headlessui/react'

const gozlink = [
    { name: 'คณะกรรมการและสมาชิก', href: '/goz/dev/webkit/ss1/about', target: '', onc: 'openError' },
    { name: 'หน่วยงานในสังกัด ก.อศ.', href: '/goz/dev/webkit/ss1/about/dept', target: '' },
    { name: 'การบริหารงานและความโปร่งใส', href: '/goz/dev/webkit/ss1/about/transparency', target: '', onc: 'openError' },
    { name: 'ช่องทางการติดต่อ', href: '/goz/dev/webkit/ss1/about/connect', target: '', onc: 'openError' },
    { name: 'เอกสาร/แบบฟอร์ม', href: '/goz/dev/webkit/ss1/about/docs', target: '', onc: 'openError' },
]
const prlink = [
<<<<<<< HEAD
    { name: 'ตารางงานประชาสัมพันธ์ทั้งหมด', href: 'https://airtable.com/appL41ESosi23CmVb/shrbDR35qe9WQfRP5', target: '_blank' },
    { name: 'ติดต่อขอลงงานประชาสัมพันธ์', href: 'https://airtable.com/appL41ESosi23CmVb/shrOw4kbtV4ghnpRW', target: '_blank' },
    { name: 'ตราสัญลักษณ์องค์กร', href: '/about/asset', target: '' },
    { name: 'Asset งานประชาสัมพันธ์', href: '/about/asset', target: '' },
]
const servlink = [
    { name: 'งานทะเบียน', href: '/reg', target: '' },
    { name: 'สวัสดิการทั้งหมด', href: '/benefit', target: '' },
    { name: 'ค้นหาชื่ออาจารย์', href: '/services/staffquery', target: '' },
    { name: 'คำนวณเกรด', href: '/service/calc', target: '' },
    { name: 'คลังข้อมูลสำหรับนิสิต', href: '/service/asset', target: '' },
    { name: 'ตรวจสอบรายวิชาและอาจารย์ที่ปรึกษา', href: '/service/query/ttb', target: '' },
    { name: 'ตรวจสอบผลการสมัครกิจกรรมต่าง ๆ', href: '/service/query/activity', target: '' },
    { name: 'ตรวจสอบผลการคัดเลือกเอก', href: '/service/query/major', target: '' },
    { name: 'รีวิวรายวิชา', href: '/review/class', target: '' },
    { name: 'รีวิวเอกในคณะ', href: '/review/major', target: '' },
    { name: 'ArtsID', href: '/artsid', target: '' },
=======
    { name: 'ตารางงานประชาสัมพันธ์ทั้งหมด', href: '/goz/dev/webkit/ss1/pr/time', target: '', onc: 'openError' },
    { name: 'ติดต่อขอลงงานประชาสัมพันธ์', href: '/goz/dev/webkit/ss1/pr/regis', target: '', onc: 'openError' },
    { name: 'ตราสัญลักษณ์องค์กร', href: '/goz/dev/webkit/ss1/about/asset', target: '', onc: 'openError' },
    { name: 'Asset งานประชาสัมพันธ์', href: '/goz/dev/webkit/ss1/about/asset', target: '', onc: 'openError' },
]
const servlink = [
    { name: 'สวัสดิการทั้งหมด', href: '/goz/dev/webkit/ss1/benefit', target: '', onc: 'openError' },
    { name: 'ค้นหาชื่ออาจารย์', href: '/goz/dev/webkit/ss1/service/search', target: '' },
    { name: 'คำนวณเกรด', href: '/goz/dev/webkit/ss1/service/calc', target: '', onc: 'openError' },
    { name: 'คลังข้อมูลสำหรับนิสิต', href: '/goz/dev/webkit/ss1/service/asset', target: '', onc: 'openError' },
    { name: 'ตรวจสอบรายวิชาและอาจารย์ที่ปรึกษา', href: '/goz/dev/webkit/ss1/service/query/ttb', target: '', onc: 'openError' },
    { name: 'ตรวจสอบผลการสมัครกิจกรรมต่าง ๆ', href: '/goz/dev/webkit/ss1/service/query/activity', target: '', onc: 'openError' },
    { name: 'ตรวจสอบผลการคัดเลือกเอก', href: '/goz/dev/webkit/ss1/service/query/major', target: '', onc: 'openError' },
    { name: 'รีวิวรายวิชา', href: '/goz/dev/webkit/ss1/review/class', target: '', onc: 'openError' },
    { name: 'รีวิวเอกในคณะ', href: '/goz/dev/webkit/ss1/review/major', target: '', onc: 'openError' },
    { name: 'ArtsID', href: '/goz/dev/webkit/ss1/artsid', target: '', onc: 'openError' },
>>>>>>> 607d2144eb1827e43de014c88d6003272f228c0a
]
const actlink = [
    { name: 'ข่าวสาร/กิจกรรม', href: '/goz/dev/webkit/ss1/activity', target: '', onc: 'openError' },
    { name: 'บทความ', href: '/goz/dev/webkit/ss1/topic', target: '', onc: 'openError' },
    { name: 'ชมรม', href: '/goz/dev/webkit/ss1/club', target: '', onc: 'openError' },
    { name: 'Arts Podcast', href: '/goz/dev/webkit/ss1/activity/podcast', target: '', onc: 'openError' },
]
const supportlink = [
    { name: 'คำถามที่พบบ่อย', href: '/goz/dev/webkit/ss1/support/faq', target: '', onc: 'openError' },
    { name: 'ร้องเรียนปัญหาต่าง ๆ', href: '/goz/dev/webkit/ss1/support/report', target: '', onc: 'openError' },
    { name: 'ข้อเสนอแนะ/ความคิดเห็น', href: '/goz/dev/webkit/ss1/support/feedback', target: '', onc: 'openError' },
    { name: 'ตรวจสอบเรื่องที่ร้องเรียน', href: '/goz/dev/webkit/ss1/support/ticketchecker', target: '', onc: 'openError' },
]
const aboutlink = [
    { name: 'นโยบายความเป็นส่วนตัว', href: '/goz/dev/webkit/ss1/support/privacy', target: '', onc: 'openError' },
    { name: 'ข้อกำหนดการใช้งาน', href: '/goz/dev/webkit/ss1/support/terms', target: '', onc: 'openError' },
    { name: 'ArtsLabs', href: '/goz/dev/webkit/ss1/artslabs', target: '', onc: 'openError' },
    { name: 'คลังข้อมูล', href: '/goz/dev/webkit/ss1/about/asset', target: '', onc: 'openError' },
    { name: 'โครงสร้างเว็บไซต์', href: '/goz/dev/webkit/ss1/support/sitemap', target: '', onc: 'openError' },
]
const weblink = [
    { name: 'GOZ Portal', href: '/goz/dev/webkit/ss1/login', target: '', onc: 'openError' },
    { name: 'PR Portal', href: '/goz/dev/webkit/ss1/login', target: '', onc: 'openError' },
    { name: 'Knowledge Management', href: '/goz/dev/webkit/ss1/ids/ikm', target: '', onc: 'openError' },
    { name: 'Helpdesk Support', href: '/goz/dev/webkit/ss1/support/helpdesk', target: '', onc: 'openError' },
    { name: 'WebKit', href: '/goz/dev/webkit/ss1/login', target: '', onc: 'openError' },
]
const unb = `underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300`
const hds = `mb-3 text-md text-[#1F1F1F] font-bold  title-font`
function Footer() {
    let [isOpen, setIsOpen] = useState(false)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    let [isError, setIsError] = useState(false)
  
    function closeError() {
        setIsError(false)
    }
  
    function openError() {
        setIsError(true)
    }
    return (
        <div>
            <div class="flex items-end w-full mt-32">
                <footer class="w-full text-gray-700 bg-[#F2F2F2] body-font">
                    <div
                        class="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                        <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                            <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start" href='/goz/dev/webkit/ss1'>
                                <img src='https://www.arts.chula.ac.th/goz/asset/icons/ab-nav.png'></img>
                            </a>
                            <p class="mt-4 text-md text-gray-500">ห้อง 148 ชั้น M1 อาคารมหาจักรีสิรินธร <br></br> 254 ถนนพญาไท แขวงวังใหม่ <br></br> เขตปทุมวัน กรุงเทพมหานคร 10330</p>
                            <div class="mt-4">
                                <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                                    <a class="text-gray-500 cursor-pointer hover:text-gray-700" href='https://www.facebook.com/artsgozcu/' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg>
                                    </a>
                                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700" href='https://twitter.com/arts_goz' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                    </a>
                                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700" href='https://www.instagram.com/arts_goz/' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                    </svg>
                                    </a>
                                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700" href='https://www.youtube.com/@GOZTVArtsCU' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                    </svg>
                                    </a>
                                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700" href='https://open.spotify.com/show/2Va46VL9Nf2OKy4KnNQQmg?si=c667cef8f9e14a09' target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
                                    </svg>
                                    </a>
                                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700" onClick={openModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                                <h2 class={hds}>เกี่ยวกับ ก.อศ.</h2>
                                <nav class="mb-5 list-none">
                                    {gozlink.map((item) => (
                                        <li class="mt-3">
                                            <a class={unb} onClick={openError}>{item.name}</a>
                                        </li>
                                    ))}
                                </nav>
                                <h2 class={hds}>ฝ่ายประชาสัมพันธ์</h2>
                                <nav class="mb-5 list-none">
                                    {prlink.map((item) => (
                                        <li class="mt-3">
<<<<<<< HEAD
                                            <Link class={unb} href={item.href} target={item.target}>{item.name} </Link>
=======
                                            <a class={unb} onClick={openError}>{item.name}</a>
>>>>>>> 607d2144eb1827e43de014c88d6003272f228c0a
                                        </li>
                                    ))}
                                </nav>
                            </div>
                            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                                <h2 class={hds}>บริการ</h2>
                                <nav class="mb-5 list-none">
                                    {servlink.map((item) => (
                                        <li class="mt-3">
                                            <a class={unb} onClick={openError}>{item.name}</a>
                                        </li>
                                    ))}
                                </nav>
                            </div>
                            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                                <h2 class={hds}>กิจกรรม
                                </h2>
                                <nav class="mb-5 list-none">
                                    {actlink.map((item) => (
                                        <li class="mt-3">
                                            <a class={unb} onClick={openError}>{item.name}</a>
                                        </li>
                                    ))}
                                </nav>
                                <h2 class={hds}>ช่วยเหลือ/ร้องเรียน</h2>
                                <nav class="mb-5 list-none">
                                    {supportlink.map((item) => (
                                        <li class="mt-3">
                                            <a class={unb} onClick={openError}>{item.name}</a>
                                        </li>
                                    ))}                               
                                </nav>
                            </div>
                            <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                                <h2 class={hds}>เกี่ยวกับเว็บไซต์</h2>
                                <div class="mb-5 list-none">
                                    {aboutlink.map((item) => (
                                        <li class="mt-3">
                                            <a class={unb} onClick={openError}>{item.name}</a>
                                        </li>
                                    ))}
                                </div>
                                <h2 class={hds}>ภายในองค์กร
                                </h2>
                                <nav class="mb-5 list-none">
                                    {weblink.map((item) => (
                                        <li class="mt-3">
                                            <a class={unb} onClick={openError}>{item.name}</a>
                                        </li>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-300">
                        <div class="container px-5 py-4 mx-auto">
                            <p class="text-sm text-gray-700 capitalize xl:text-center">Copyright © 2023 Artsgoz. สงวนสิทธิ์ทุกประการ | พัฒนาโดย Dhanav
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3">
                    <div className='grid'>
                    <div className='flex text-lg text-[#2F2F2F] font-medium'>เบอร์ติดต่อ</div>                    
                    </div>
                        
                    </Dialog.Title>
                        <div className='mt-3 text-md text-[#2F2F2F] font-medium'>โทรศัพท์ 02-218-4897</div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition appear show={isError} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeError}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    เนื้อหานี้ยังไม่เปิดใช้งาน
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    ขออภัยในความไม่สะดวก หน้าที่คุณกำลังจะไปยังไม่เปิดใช้งานสำหรับบุคคลทั่วไป
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex px-4 py-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                      cursor-pointer transition-colors duration-300"
                      onClick={closeError}
                    >
                      ปิด
                    </button>
                  </div>
                </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        </div>
    );
}

export default Footer;