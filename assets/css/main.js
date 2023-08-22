function thoatmenu(){
    let cdwindow=window.innerWidth
    if(cdwindow>992){
        const x=document.querySelector('.menu-drop')
        x.classList.remove('active')
    }
   setTimeout(thoatmenu,500)
}
function myFunction(){
    const a=document.querySelector('.video-img')
    a.classList.add('actived')
   setTimeout(function(){
    a.classList.add('disabled')
   },800)
}

setInterval(function(){
    document.querySelector('.lanchuot').classList.toggle('lanchuot1')
},600)

const x =document.querySelector('.chu_2land')
setInterval(function(){
    x.classList.toggle('pink')
},1000)

function hienthithoigian(){
    const t=new Date()
    let n=t.getDay()
    let h=t.getHours()
    let m=t.getMinutes()
    let s=t.getSeconds()

    m=dinhdang(m)
    n=dinhdang(n)
    h=dinhdang(h)
    s=dinhdang(s)

    document.querySelector('#ngay').innerHTML=`${n}`
    document.querySelector('#gio').innerHTML=`${h}`
    document.querySelector('#phut').innerHTML=`${m}`
    document.querySelector('#giay').innerHTML=`${s}`
    document.querySelector('.dealtrong').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong2').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong3').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong4').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong5').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong6').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong7').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong8').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong9').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong10').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong11').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong12').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong13').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong14').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong15').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong16').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong17').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong18').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong19').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong20').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong21').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong22').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong23').innerHTML=`${n}:${h}:${m}:${s}`
    document.querySelector('.dealtrong24').innerHTML=`${n}:${h}:${m}:${s}`
    setTimeout(hienthithoigian,1000)
}
function dinhdang(k){
    if(k<10){
        k='0'+k
    }
    return k
}
function myFunction2(id){
    const luu=document.getElementById(id)
    luu.innerHTML="Đã lưu!"
    luu.style.backgroundColor='#ccc'
}

 const apdung=document.querySelector('.apdung')
 apdung.onclick=function(){
    this.innerHTML="Đã áp dụng"
    this.style.backgroundColor='#ccc'
 }

setInterval(function(){
    document.querySelector('.luotlen').classList.toggle('nhodi')
},1000)
const chonmua=document.querySelectorAll('.muadeal')
let htmls=document.querySelector('.them')
let giamoi=0
let res
let htmlss=document.querySelector('.themvao')
const app=(function (){
    let thongtins=[
        {
            img:'./img_deal/img_1.webp',
            giatien:270 
        },
        {
            img:'./img_deal/img_2.webp',
            giatien:386
        },
        {
            img:'./img_deal/img_3.webp',
            giatien:135
        },
        {
            img:'./img_deal/img_4.webp',
            giatien:294
        },
        {
            img:'./img_deal/img_5.webp',
            giatien:88
        },
        {
            img:'./img_deal/img_10.webp',
            giatien:350
        },
        {
            img:'./img_banchay/img_1.webp',
            giatien:590
        },
        {
            img:'./img_banchay/img_2.webp',
            giatien:379
        },
        {
            img:'./img_banchay/img_3.webp',
            giatien:235
        },
        {
            img:'./img_banchay/img_4.webp',
            giatien:120
        },
        {
            img:'./img_banchay/img_5.webp',
            giatien:65
        },
        {
            img:'./img_banchay/img_6.webp',
            giatien:310
        },
        {
            img:'./img_rangxay/img_1.webp',
            giatien:550
        },
        {
            img:'./img_rangxay/img_2.webp',
            giatien:295
        },
        {
            img:'./img_rangxay/img_3.webp',
            giatien:88
        },
        {
            img:'./img_rangxay/img_4.webp',
            giatien:365
        },
        {
            img:'./img_rangxay/img_5.webp',
            giatien:65
        },
        {
            img:'./img_rangxay/img_6.webp',
            giatien:67
        },
        {
            img:'./img_uonglien/img_1.webp',
            giatien:32
        },
        {
            img:'./img_uonglien/img_2.webp',
            giatien:379
        },
        {
            img:'./img_uonglien/img_3.webp',
            giatien:350
        },
        {
            img:'./img_uonglien/img_4.webp',
            giatien:280
        },
        {
            img:'./img_uonglien/img_5.webp',
            giatien:82
        },
        {
            img:'./img_uonglien/img_6.webp',
            giatien:75
        }
    ]
    const lists=[]
    return{
        start(){
            for(let mua of chonmua){
                mua.onclick=function(){
                    document.querySelector('.main7').classList.add('mo')
                    document.querySelector('.thanhtoan').style.animation='sangngang 1s ease-in'
                    setTimeout(function(){
                    document.querySelector('.thanhtoan').style.transform='translateX(0%)'
                    },1000)
                    let soid=parseInt(mua.id)
                    for(let currentIndex=0;currentIndex<24;currentIndex++){
                        if(currentIndex===soid){
                            lists.push(thongtins[currentIndex])
                            const html=lists.map((list,index)=>
                            `<div  class="mt-3 d-flex justify-content-between align-items-center">
                        <img src="${list.img}" class="img-fluid anhthem" width="60" height="60" alt="">
                        <div class="" style="width: 140px;">
                        <div class="d-flex align-items-center justify-content-end">
                          <p class="giatiensanpham">${list.giatien}</p>
                          <p class="dong">.000đ</p>
                      </div>
                        <div class="xoabor mt-3" data-index="${index}">
                         <p class="xoanhe">Bỏ sản phẩm</p>
                       </div>
                       </div>
                     </div>`
                            )
                            htmls.innerHTML=html.join('')
                            htmlss.innerHTML=html.join('')
                        }
                    }
                     res = lists.reduce((total,currentValue) => {
                        return total + currentValue.giatien;
                      },0)
                      document.querySelector('.tongtien').textContent=`${res}`
                      document.querySelector('.tamtinh1').textContent=`${res}`
                      let checkso=document.getElementById('myCheck')
                    checkso.onclick=function(){
                    if(checkso.checked){
                       const phivanchuyen=document.querySelector('.tamtinh3')
                       phivanchuyen.textContent='25'
                       const tongtatca=document.querySelector('.tamtinh4')
                       let tien=res+25
                       tongtatca.textContent=`${tien}`
                      
                     }
                     else{
                        const phivanchuyen=document.querySelector('.tamtinh3')
                        phivanchuyen.textContent='0'
                        const tongtatca=document.querySelector('.tamtinh4')
                       let tien=res+0
                       tongtatca.textContent=`${tien}`
                     
                     }
                 }
                 const soluong=document.querySelector('.soluong')
                  let sos=lists.length
                  soluong.textContent=`(${sos} sản phẩm)`
                }
            }
            htmls.onclick=function(e){
                const btn=e.target.closest('.xoabor')
                console.log(btn)
              if(btn){
                const indexs=btn.dataset.index
                lists.splice(indexs,1)
                const html=lists.map((list,index)=>
                `<div  class="mt-3 d-flex justify-content-between align-items-center">
            <img src="${list.img}" class="img-fluid anhthem" width="60" height="60" alt="">
            <div class="" style="width: 140px;">
            <div class="d-flex align-items-center justify-content-end">
              <p class="giatiensanpham">${list.giatien}</p>
              <p class="dong">.000đ</p>
          </div>
          <div class="xoabor mt-3" data-index="${index}">
          <p class="xoanhe">Bỏ sản phẩm</p>
        </div>
           </div>
         </div>`
                )
                htmls.innerHTML=html.join('')
                htmlss.innerHTML=html.join('')
              }
               res = lists.reduce((total,currentValue) => {
                  return total + currentValue.giatien;
                },0)
                document.querySelector('.tongtien').textContent=`${res}`
                document.querySelector('.tamtinh1').textContent=`${res}`
                let checkso=document.getElementById('myCheck')
                checkso.onclick=function(){
                if(checkso.checked){
                   const phivanchuyen=document.querySelector('.tamtinh3')
                   phivanchuyen.textContent='25'
                   const tongtatca=document.querySelector('.tamtinh4')
                       let tien=res+25
                       tongtatca.textContent=`${tien}`
                       
                 }
                 else{
                    const phivanchuyen=document.querySelector('.tamtinh3')
                    phivanchuyen.textContent='0'
                    const tongtatca=document.querySelector('.tamtinh4')
                       let tien=res+0
                       tongtatca.textContent=`${tien}`
                
                 }
             }
             const soluong=document.querySelector('.soluong')
             let so=lists.length
             soluong.textContent=`(${so} số lượng)`
            }
            const anhien=document.querySelector('.anhien')
            anhien.onclick=function(a){
                const btn1=a.target.closest('.nonenhe')
                if(btn1){
                    document.querySelector('.thanhtoan').style.animation='sangtrong 1s ease-out'
                 setTimeout(function(){
                      document.querySelector('.thanhtoan').style.transform='translateX(100%)'
                     document.querySelector('.main7').classList.remove('mo')
                  },1000)
                }
            }
            const hang=document.querySelector('.dathang')
            hang.onclick=function(){
                let tich = lists.reduce((total,currentValue) => {
                    return total + currentValue.giatien;
                  },0)
                  let checkso2=document.getElementById('myCheck')
                  if(checkso2.checked){
                    document.querySelector('.tannoi').textContent='Giao hàng tận nơi'
                    let tongtich=tich+25
                    document.querySelector('.themtien').textContent=`${tongtich}.000đ`
                  }
                  else{
                    document.querySelector('.themtien').textContent=`${tich}.000đ`
                    document.querySelector('.tannoi').textContent=''
                  }
                  let checkso3=document.getElementById('myCheck1')
                 if(checkso3.checked){
                    document.querySelector('.toankhi').textContent='Thanh toán khi giao hàng (COD)'
                 }
                 else{
                    document.querySelector('.toankhi').textContent=''
                 }
            }
        },
    }
})()
app.start()

const nutclose=document.querySelector('.nut_close')
nutclose.onclick=function(){
    document.querySelector('.thanhtoan').style.animation='sangtrong 1s ease-out'
    setTimeout(function(){
        document.querySelector('.thanhtoan').style.transform='translateX(100%)'
        document.querySelector('.main7').classList.remove('mo')
    },1000)
}
