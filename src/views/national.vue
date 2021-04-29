<template>
  <div class="national">
    <div class="national-top">
      <img src="https://cs.zhaolipin.net/55986b4e-d475-4230-b7ac-7ded47448f0e.png" />
    </div>
    <div class="ppjx">
      <div class="box-top">
        <img src="https://cs.zhaolipin.net/c4381a21-be03-4272-b753-f13c0e0f1adc.png" />
      </div>
      <div class="box-list">
        <div class="goods-first">
          <div class="list-top" @click="goDetail(77228)">
            <div class="top-box">
              <div class="top-row">
                <div class="goods-name">小黄人时尚保温杯</div>
                <div class="goods-price">
                  <div class="old-price">
                    <span>¥</span>
                    <i>518.00</i>
                  </div>
                  <div class="current-price">
                    <span>¥</span>
                    <b>99.00</b>
                  </div>
                </div>
              </div>
              <div class="top-row">
                <div class="goods-des">别出心裁的设计，取悦真心</div>
                <div class="goods-btn">立即购买</div>
              </div>
            </div>
          </div>
        </div>
        <div class="goods-list">
          <div class="goods-item" @click="goDetail(77255)">
            <img src="https://cs.zhaolipin.net/e7a31ff4-5edf-4037-9aff-171060ec6771.jpg" />
            <div class="item-name">康佳百膳锅</div>
            <div class="item-des">
              <div>精准控温｜9大功能｜精钢鼎釜</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>519.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>1680.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77237)">
            <img src="https://cs.zhaolipin.net/6b3f7b5f-da64-4a0e-835e-f9c2d5653581.jpg" />
            <div class="item-name">奥佳华按摩足疗机</div>
            <div class="item-des">
              <div>三大按摩模式｜温暖热敷｜滚轮按摩</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>3199.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>3299.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77258)">
            <img src="https://cs.zhaolipin.net/bb5423bb-2975-4a6c-895d-366eeda36651.jpg" />
            <div class="item-name">大宇便携式果汁杯</div>
            <div class="item-des">
              <div>无线榨汁｜快速充电｜刀片隐藏</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>289.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>699.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77254)">
            <img src="https://cs.zhaolipin.net/a552db40-ee06-46fb-b1a2-646b20eb4dd3.jpg" />
            <div class="item-name">康佳蓝色智能升降锅</div>
            <div class="item-des">
              <div>一键升降｜大火力｜蒸煮多能</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>651.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>1920.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77250)">
            <img src="https://cs.zhaolipin.net/d5baecc9-810f-414a-bf32-687a63b2b7e8.jpg" />
            <div class="item-name">康佳小磨王研磨机</div>
            <div class="item-des">
              <div>轻松研磨｜小巧易收纳｜纯铜电机</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>189.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>395.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77246)">
            <img src="https://cs.zhaolipin.net/c6ff954d-ca1a-4664-a802-648598a4e3d0.jpg" />
            <div class="item-name">美国西屋颈部按摩仪</div>
            <div class="item-des">
              <div>舒适热敷｜五大模式｜长续航</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>319.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>899.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77240)">
            <img src="https://cs.zhaolipin.net/774237b0-6794-4b3c-84fb-802bd1d5364a.jpg" />
            <div class="item-name">鸣盏养生玻璃水壶</div>
            <div class="item-des">
              <div>偏心滤网｜双层防烫｜简易拆洗</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>75.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>99.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77238)">
            <img src="https://cs.zhaolipin.net/f40743b8-94f3-4f3a-b56b-a20937a38d42.jpg" />
            <div class="item-name">慕思璞宿乳胶枕</div>
            <div class="item-des">
              <div>亲肤透气｜回弹力强｜拆洗外套</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>219.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>1388.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lpjx">
      <div class="box-top">
        <img src="https://cs.zhaolipin.net/3e5bfca7-8e90-4fa9-ad14-2061257da93a.png" />
      </div>
      <div class="box-list">
        <div class="goods-first">
          <div class="list-top" @click="goDetail(77248)">
            <div class="top-box">
              <div class="top-row">
                <div class="goods-name">西屋即热式饮水机</div>
                <div class="goods-price">
                  <div class="old-price">
                    <span>¥</span>
                    <i>1399.00</i>
                  </div>
                  <div class="current-price">
                    <span>¥</span>
                    <b>719.00</b>
                  </div>
                </div>
              </div>
              <div class="top-row">
                <div class="goods-des">颜粉宠爱 滴滴鲜水</div>
                <div class="goods-btn">立即购买</div>
              </div>
            </div>
          </div>
        </div>
        <div class="goods-list">
          <div class="goods-item" @click="goDetail(77264)">
            <img src="https://cs.zhaolipin.net/e4f86698-43ce-414a-89c6-b2c656373dc8.jpg" />
            <div class="item-name">爱普家用手持式无线吸尘器</div>
            <div class="item-des">
              <div>无线自由吸尘｜大吸力｜多功能清洁</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>675.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>999.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77242)">
            <img src="https://cs.zhaolipin.net/cdc92c59-8873-4139-86ca-2436eee0fed7.jpg" />
            <div class="item-name">鸣盏养生壶 0.8升</div>
            <div class="item-des">
              <div>两种模式｜不锈钢发热盘｜茶水分离</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>176.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>199.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77229)">
            <img src="https://cs.zhaolipin.net/9c331a8b-ef07-4fce-989e-e52be137b326.jpg" />
            <div class="item-name">神偷奶爸小黄人时尚背包</div>
            <div class="item-des">
              <div>休闲时尚｜反光设计｜轻柔耐磨</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>115.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>788.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77236)">
            <img src="https://cs.zhaolipin.net/0c3a99b6-949d-45d8-a50a-34861ae0a4e3.jpg" />
            <div class="item-name">奥佳华家用按摩椅</div>
            <div class="item-des">
              <div>智能交互｜全方位按摩｜3D机芯系统</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>15999.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>19800.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77257)">
            <img src="https://cs.zhaolipin.net/031d7cf5-6813-4036-9244-9de744463a6e.jpg" />
            <div class="item-name">大宇家用不沾无烟烧烤架</div>
            <div class="item-des">
              <div>持久耐用｜健康不沾｜无油烟</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>850.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>2980.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77249)">
            <img src="https://cs.zhaolipin.net/6f6f1373-80e8-4ca8-9c0e-e479911e48aa.jpg" />
            <div class="item-name">金灶全自动煮茶器</div>
            <div class="item-des">
              <div>感应触控｜实时控温｜7挡温度调节</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>218.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>255.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77265)">
            <img src="https://cs.zhaolipin.net/4a740d5b-7773-4895-a805-4dd561109377.jpg" />
            <div class="item-name">爱普家用无线手持吸尘器</div>
            <div class="item-des">
              <div>无刷电机｜澎湃吸力｜应对多场景</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>1335.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>1999.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77247)">
            <img src="https://cs.zhaolipin.net/132fb7ed-1b21-48a5-a707-48a64b5790dd.jpg" />
            <div class="item-name">美国西屋迷你豆浆机</div>
            <div class="item-des">
              <div>4叶刀头｜28000RPM｜一机8能</div>
            </div>
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>390.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>899.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jhbk">
      <div class="box-top">
        <img src="https://cs.zhaolipin.net/5b9ae65a-a75f-4268-b2c7-57059fdd9b2f.png" />
      </div>
      <div class="box-list">
        <div class="goods-first">
          <div class="list-top" @click="goDetail(77235)">
            <div class="top-box">
              <div class="top-row">
                <div class="goods-name">奥拉芙哥德堡典雅蚕丝被</div>
                <div class="goods-price">
                  <div class="old-price">
                    <span>¥</span>
                    <i>3078.00</i>
                  </div>
                  <div class="current-price">
                    <span>¥</span>
                    <b>795.00</b>
                  </div>
                </div>
              </div>
              <div class="top-row">
                <div class="goods-des">蚕眠随身 如此心醉</div>
                <div class="goods-btn">立即购买</div>
              </div>
            </div>
          </div>
        </div>
        <div class="goods-list">
          <div class="goods-item" @click="goDetail(77263)">
            <div class="item-name">爱普家用吸尘器</div>
            <div class="item-des">
              <div>立式/手持多用吸尘器</div>
            </div>
            <img src="https://cs.zhaolipin.net/da8088c7-fe41-4630-b61e-2d20db7ce5d8.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>285.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>499.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77232)">
            <div class="item-name">小黄人家用多功能电烧烤炉</div>
            <div class="item-des">
              <div>餐桌变厨房</div>
            </div>
            <img src="https://cs.zhaolipin.net/3955cb38-9dd9-4950-9d33-8adcb78b85c7.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>246.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>1075.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77266)">
            <div class="item-name">米力百变迷你蓝牙音箱</div>
            <div class="item-des">
              <div>百变造型 任意搭配</div>
            </div>
            <img src="https://cs.zhaolipin.net/197aa784-aab0-42ad-8686-7b4dec6956f9.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>98.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>199.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77233)">
            <div class="item-name">奥拉芙全棉四件套</div>
            <div class="item-des">
              <div>简约纯色 享受慢生活</div>
            </div>
            <img src="https://cs.zhaolipin.net/8d5ee1dd-e95c-4a9b-b8b0-b7f1e06a5ac4.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>398.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>2190.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77245)">
            <div class="item-name">美国西屋颈部按摩仪</div>
            <div class="item-des">
              <div>双效硬核按摩 告别颈椎酸痛</div>
            </div>
            <img src="https://cs.zhaolipin.net/4b354ea2-a745-465f-8352-4fd7aa690f6b.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>319.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>899.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77230)">
            <div class="item-name">威尔爆米花机</div>
            <div class="item-des">
              <div>找回童年美好回忆</div>
            </div>
            <img src="https://cs.zhaolipin.net/898bc3ea-77c7-47c1-9cd4-81db04ef7e17.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>169.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>399.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77259)">
            <div class="item-name">大宇多功能全自动炒菜机</div>
            <div class="item-des">
              <div>炒菜少油烟 健康新选择</div>
            </div>
            <img src="https://cs.zhaolipin.net/89780234-53e9-448d-a8df-9e44ec7e9827.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>1122.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>2899.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77252)">
            <div class="item-name">康佳妙果乐料理机</div>
            <div class="item-des">
              <div>轻松料理美好日常</div>
            </div>
            <img src="https://cs.zhaolipin.net/0db9f2ae-9abf-49c4-a3f6-f725308bf165.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>129.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>348.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77234)">
            <div class="item-name">小黄人时尚四件套</div>
            <div class="item-des">
              <div>萌趣回归</div>
            </div>
            <img src="https://cs.zhaolipin.net/73bf9d0a-6b0e-42b2-84f4-cebed506390d.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>479.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>2728.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77244)">
            <div class="item-name">鸣盏智能自动烧水壶</div>
            <div class="item-des">
              <div>灵感新造 茶味悠然</div>
            </div>
            <img src="https://cs.zhaolipin.net/9c30006e-ca5d-4462-a444-d8e59416abc3.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>399.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>499.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77256)">
            <div class="item-name">康佳电煮锅</div>
            <div class="item-des">
              <div>一锅在手 美味尽有</div>
            </div>
            <img src="https://cs.zhaolipin.net/1f4eb824-f291-4166-b442-b91a48a0cc27.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>139.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>330.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77231)">
            <div class="item-name">小黄人水洗棉舒芯被</div>
            <div class="item-des">
              <div>萌趣回归</div>
            </div>
            <img src="https://cs.zhaolipin.net/ea88934a-9ffd-4d94-beb9-98823dfaf0f1.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>177.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>871.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77239)">
            <div class="item-name">鸣盏养生煮茶器</div>
            <div class="item-des">
              <div>微茶趣 新煮义</div>
            </div>
            <img src="https://cs.zhaolipin.net/70265a2e-ad7f-4829-a6b3-0a14b7869241.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>299.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>349.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77261)">
            <div class="item-name">罗莱全棉套件恬淡时光四件套</div>
            <div class="item-des">
              <div>触感绵柔</div>
            </div>
            <img src="https://cs.zhaolipin.net/334e657e-fa99-4c88-ade9-020774b88075.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>900.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>2480.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77251)">
            <div class="item-name">康佳旋风食客家用多功能绞肉机</div>
            <div class="item-des">
              <div>食材轻松切 料理好帮手</div>
            </div>
            <img src="https://cs.zhaolipin.net/c722e81f-339a-495c-bec0-6f3740be6606.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>189.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>499.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77260)">
            <div class="item-name">罗莱家纺套件雨林憧憬四件套</div>
            <div class="item-des">
              <div>全棉面料 舒适透气</div>
            </div>
            <img src="https://cs.zhaolipin.net/3f92bbff-828e-4e43-acfe-e11161a53433.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>450.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>1049.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77243)">
            <div class="item-name">鸣盏养生壶煮茶器煮</div>
            <div class="item-des">
              <div>办公室时刻 一人私享养生</div>
            </div>
            <img src="https://cs.zhaolipin.net/e7abf369-5060-44f3-ba1d-cace73326c8e.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>139.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>149.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77262)">
            <div class="item-name">罗莱叶韵秋华夏被</div>
            <div class="item-des">
              <div>柔软亲肤 呵护您的睡眠</div>
            </div>
            <img src="https://cs.zhaolipin.net/2b072e02-7d7f-4bc0-88b3-83bc084717f3.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>120.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>439.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77241)">
            <div class="item-name">鸣盏养生壶煮茶器煮茶壶</div>
            <div class="item-des">
              <div>生活要美 好茶佐味</div>
            </div>
            <img src="https://cs.zhaolipin.net/a219d8b0-9ce2-47eb-8abe-3a945ef13cd4.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>283.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>289.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
          <div class="goods-item" @click="goDetail(77253)">
            <div class="item-name">康佳养生壶妙音壶</div>
            <div class="item-des">
              <div>享受曼妙时光</div>
            </div>
            <img src="https://cs.zhaolipin.net/d13ee47c-c56a-44cd-9bd7-01d7d4ed6523.jpg" />
            <div class="item-price">
              <div class="current-price">
                <span>¥</span>
                <b>268.00</b>
              </div>
              <div class="old-price">
                <span>¥</span>
                <i>770.00</i>
              </div>
            </div>
            <div class="item-btn">
              <div>立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="national-footer">
      <div class="footer">
        <img src="https://cs.zhaolipin.net/73ed5339-8dd6-4c7f-b58a-d28f9a4ed9f1.png" />
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=11906548&userId=24700287">
          <img src="../img/nation/zxkf.png" />
        </a>
        <img src="../img/nation/ewm.png" />
      </div>
    </div>
    <div class="fixed">
      <router-link to="index">
        <img
          src="../img/home/icon/shouye.png"
          style=" height: .4rem;"
        />
      </router-link>
      <img
        src="../festival/cart.png"
        style=" margin-top:.2rem;height: .4rem;border-radius: 50%;"
        @click="goShopCart"
      />
      <img
        src="../img/home/icon/dingbu1.png"
        style=" margin-top:.2rem; height: .4rem;"
        v-show="isFixed"
        @click="checktop"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.onscroll = function () {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        this.isFixed = true;
      }
    };
    window.addEventListener("scroll", this.handleScroll); //固定导航
  },
  methods: {
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
          isFestival:true
        },
      });
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 100) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    checktop() {
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    goShopCart() {
      this.$router.push({
        path: "/shoppingcart",
      });
    },
  },
};
</script>

<style scoped>
.fixed {
  width: .4rem;
  height: 1.5rem;
  position: fixed;
  right: .1rem;
  top: 50%;
  transform: translateY(-50%);
}
.fixed img {
  display: block;
}
.national {
  width: 3.75rem;
  background: linear-gradient(90deg, #631814, #a4362e, #661815);
  box-sizing: border-box;
  font-size: 0.12rem;
}
.national i {
  font-style: normal;
}
.national .national-top {
  width: 100%;
}
.national .national-top img {
  width: 100%;
}
.national .ppjx {
  width: 100%;
}
.box-top {
  width: 100%;
  text-align: center;
}
.box-top img {
  width: 1.4rem;
}
.box-list {
  width: 3.55rem;
  margin: 0.14rem auto 0;
}
.box-list .goods-first {
  background: #fff;
  border-radius: 0.08rem;
  height: 1.7rem;
}
.box-list .list-top {
  position: relative;
  height: 100%;
  background: url("https://cs.zhaolipin.net/1d36380c-6bac-4551-9d73-6e3fd88d7102.png") no-repeat;
  background-size: 100% 1.4rem;
}
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goods-name {
  font-size: 0.14rem;
  color: #111111;
  font-weight: bold;
}
.top-box {
  position: absolute;
  top: 1.2rem;
  left: 0.66rem;
  width: 2.8rem;
}
.goods-price {
  display: flex;
  justify-content: center;
  align-items: center;
}
.goods-price span {
  font-size: 0.12rem;
}
.goods-price .old-price {
  text-decoration: line-through;
  font-size: 0.12rem;
  color: #828282;
}
.goods-price .current-price {
  margin-left: 0.06rem;
  font-size: 0.14rem;
  color: #111111;
  background: linear-gradient(0deg, #ca2020 0%, #ff0c0c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.goods-des {
  color: #fb4c4c;
}
.goods-btn {
  background: linear-gradient(-90deg, #ca2020, #ff0c0c);
  font-weight: bold;
  color: #ffffff;
  border-radius: 0.2rem;
  padding: 0.04rem 0.2rem;
}
.goods-list {
  width: 3.55rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods-list .goods-item {
  background: #fff;
  border-radius: 0.06rem;
  width: 1.74rem;
  text-align: center;
  padding: 0.1rem 0;
  margin-top: 0.08rem;
}
.goods-list .goods-item img {
  width: 1.5rem;
  height: auto;
}
.goods-list .goods-item .item-name {
  font-weight: bold;
  color: #111111;
}
.goods-list .goods-item .item-price {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: .04rem;
  font-weight: bold;
}
.goods-list .goods-item .item-price .current-price {
  margin-right: 0.08rem;
  color: #fa4949;
  background: linear-gradient(-90deg, #ca2020 0%, #ff0c0c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.goods-list .goods-item .item-price .old-price {
  font-weight: 400;
  text-decoration: line-through;
  color: #606060;
}
.goods-list .goods-item .item-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-top: .04rem;
}
.goods-list .goods-item .item-btn div {
  background: linear-gradient(-90deg, #ca2020, #ff0c0c);
  color: #fff;
  padding: 0.06rem 0.14rem;
  border-radius: 0.14rem;
}
.item-des {
  color: #fb4c4c;
  white-space: nowrap;
  transform: scale(0.82);
  display: flex;
  width: 1.74rem;
  justify-content: center;
  margin-top: .02rem;
}
.lpjx {
  margin-top: 0.36rem;
}
.lpjx .list-top {
  background: url("https://cs.zhaolipin.net/3aace7da-8d31-4841-8aa3-db8d7e53725c.png") no-repeat;
  background-size: 100% 1.4rem;
}
.jhbk {
  margin-top: 0.36rem;
}
.jhbk .list-top {
  background: url("https://cs.zhaolipin.net/84cc6d9f-a55b-4882-bbaa-76aea8abda23.png") no-repeat;
  background-size: 100% 1.4rem;
}
.jhbk .item-des {
  font-weight: 400;
  color: #464646;
}
.jhbk .item-btn {
  margin-top: 0.08rem;
}
.national-footer {
  width: 3.75rem;
  background: url("https://cs.zhaolipin.net/f75fa6a3-7657-4941-a7ec-5187696e78b3.png") no-repeat;
  background-size: 100% 100%;
}
.national-footer .footer {
  position: relative;
  width: 3.55rem;
  margin: 0.2rem auto 0;
  padding-bottom: 0.2rem;
}
.national-footer .footer img:nth-of-type(1) {
  width: 100%;
}
.national-footer .footer a {
  position: absolute;
  top: 0.24rem;
  right: 0.24rem;
}
.national-footer .footer a img {
  width: 0.64rem !important;
  height: 0.17rem;
}
.national-footer .footer img:nth-of-type(2) {
  position: absolute;
  top: 0.45rem;
  right: 0.24rem;
  width: 0.39rem;
  height: 0.39rem;
}

</style>