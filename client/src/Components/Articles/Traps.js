import React from 'react';
import Header from '../Header/';
import Back from 'react-icons/lib/md/navigate-before';
import './Articles.css';

const Traps = () => {
  var 姓 = window.settings.姓;
  return (
    <div className='plain-article'>
      <Header leftIcon={<Back/>} leftLink={'/menu'} title='给宝宝起名的10个陷阱' headingLevel={3}/>
      <article>
        <p>1. 使用多音字</p>
        <p>例如{姓}间乐、{姓}相朝、{姓}重兴, 你有没有意识到这三个名字里包含了六个多音字? 莫非你是为了让老师点名的时候怕读错绕开你?</p>
        <p></p>
        <p>2. 使用生僻字</p>
        <p>{姓}筱玥, {姓}隽诣, {姓}芮翎, 你是不是觉得这些字一点都不生僻? 告诉你, 你的文化程度太高了! 别把广大老百姓不放在心上!</p>
        <p></p>
        <p>3. 追求生辰八字, 风水五行</p>
        <p>首先你要想清楚, 什么是好名字? 好名字的标准是什么?</p>
        <p>如果你对好名字的定义是"好听, 好用, 寓意好", 那追求风水就是舍本逐末, 因为一些条条框框会缩窄你搜寻好名字的范围。</p>
        <p>另外, 如果有一个算命先生会算八字, 请你思考一下: 他是怎么学会的? 是谁教他的?</p>
        <p>如果你找三个先生, 他们给出的结论会是一模一样的吗? 会不会一个说缺水, 一个说缺火?</p>
        <p></p>
        <p>4. 执着典故和出处</p>
        <p>有些人的名字出自古文, 例如梁思成出自《诗经·商颂·那》: 汤孙奏假，绥我思成。林徽因出自《诗经·大雅·思齐》: 大姒嗣徽音，则百斯男。</p>
        <p>宝宝的名字有典故当然是一件很牛掰的事情, 但若太过执着于追求典故, 则是舍本逐末了。</p>
        <p>在你的一生当中, 喊过你名字的人或许上万, 但没人会关心你的名字有什么典故。到头来有心思关心的也许只有不到10个你最亲近的人。</p>
        <p>所以说, 起名字的时候要注意, 尽量做到让不知道典故的人也觉得好听。上万人觉得好听和10个人觉得好听, 哪个优先?</p>
        <p></p>
        <p>5. 兄弟姐妹共享同一个字</p>
        <p>假如你对好名字的定义是"好听, 好用, 寓意好", 那执着于兄弟姐妹共享同一个字就变成了舍本逐末, 因为这会缩窄你搜寻好名字的范围。</p>
        <p>当然, 如果你能做到个个都好听, 比如你家三个孩子叫{姓}观象, {姓}观海, {姓}观星, 那就当我没说。</p>
        <p></p>
        <p>6. 执着于辈分</p>
        <p>有些家庭讲究名字中带上孩子的辈分。还是那句话, 假如你对好名字的定义是"好听, 好用, 寓意好", 那追求辈分就变成了舍本逐末, 因为这会缩窄你搜寻好名字的范围。</p>
        <p></p>
        <p>7. 使用中性名字</p>
        <p>有些家长因为不知道宝宝的性别, 所以提前起了一个中性的名字, 这是比较不负责任的。</p>
        <p>还是那句话, 这样会缩窄你搜寻好名字的范围。比较好的做法是男名女名分别准备一个。</p>
        <p></p>
        <p>8. 为了好听, 忽略了实用</p>
        <p>举几个例子, 都是非常好听的名字(也都是本软件的智能模式给出的名字)。</p>
        <p>例一:</p>
        <p>你在楼下玩, 你妈在阳台喊你: "{姓}云慈! 回家吃饭! "</p>
        <p>这个名字的问题是大声喊的时候喊不响。</p>
        <p>例二:</p>
        <p>你的小伙伴喊你: "{姓}心钥! {姓}心钥! 传球! "</p>
        <p>这个名字的问题是后两字的界限不清, 读快了听起来像"{姓}笑"。</p>
        <p>例三:</p>
        <p>别人问: "你叫什么名字?"</p>
        <p>你: "{姓}星骤"</p>
        <p>别人(没听清): "什么? "</p>
        <p>你(放慢速度): "{姓}星骤, 天上的星星的星, 暴风骤雨的骤"。</p>
        <p>别人: "哦哦哦!"</p>
        <p>这个名字的问题是别人一遍听不明白, 不好介绍。</p>
        <p></p>
        <p>9. 起好名之后忘了百度一下:</p>
        <p>无论起了什么名, 一定要先百度一下, 看看出来什么结果。有的时候会有惊喜哦~</p>
        <p></p>
        <p>10. 不看统计数据, 自认为品味脱俗:</p>
        <p>就像服饰、音乐、发型一样, 人们对名字的品味也是有潮流的, 无论你是谁, 都逃脱不了你的年代。50年代的时候, 只有{姓}二狗这种名字才算土, 过了10年{姓}秀萍也变土了, 又过了10年{姓}建国也土了, 又过了10年{姓}孤城也变土了, 又过了10年{姓}诗雯也变土了, 又过了10年{姓}柒染才是最土, 到了今年, 你有没有准备给自己的娃起名叫{姓}子恒, {姓}雨涵, {姓}鸿轩?</p>
        <p>作者在网上搜罗了30份左右全国各地不同幼儿园的2015-2018年间的录取名单, 共凑集了4000多个名字作为样本, 统计发现使用频率最多的30个字如下, 看看你有没有中枪?</p>
        <p></p>
        <p>高频字/出现次数:</p>
        <p>
        子: 118,<br/>
        涵: 80,<br/>
        睿: 72,<br/>
        宇: 71,<br/>
        轩: 70,<br/>
        梓: 69,<br/>
        晨: 53,<br/>
        思: 53,<br/>
        雨: 51,<br/>
        怡: 51,<br/>
        嘉: 50,<br/>
        宸: 49,<br/>
        佳: 47,<br/>
        辰: 46,<br/>
        文: 45,<br/>
        一: 44,<br/>
        然: 43,<br/>
        欣: 41,<br/>
        浩: 38,<br/>
        泽: 36,<br/>
        萱: 35,<br/>
        熙: 35,<br/>
        俊: 33,<br/>
        馨: 32,<br/>
        博: 31,<br/>
        艺: 31,<br/>
        天: 31,<br/>
        希: 30,<br/>
        琪: 29,<br/>
        语: 29<br/>
        </p>
      </article>
    </div>
  );
};
export default Traps;
