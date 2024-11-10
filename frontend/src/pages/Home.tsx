import React from "react";
import '../index.css';
import { StackedAvatar } from "../components/hero/StackedAvatar";
import { Card, heroCardData } from "../components/hero/Card";
import { QualityIcon, CompanyIcon, ChargeIcon, JobIcon } from "../components/PopularitySection";
import { PopularitySection } from "../components/PopularitySection";
import { Hero } from "../components/hero/Hero";
import { Category } from "../components/Category";
import Tab from "../components/tabs/Tab";
import { HorTab } from "../components/tabs/HorTab";
import { useTranslation } from "react-i18next";




const data = {

   
  category: {
    title: 'Browse Talent by Category',
    card: [{ title: 'Development & IT', rating: '4.8/5', skills: '459' },
    { title: 'Development & IT', rating: '4.8/5', skills: '459' },
    { title: 'Development & IT', rating: '4.8/5', skills: '459' },
    { title: 'Development & IT', rating: '4.8/5', skills: '459' },
    { title: 'Development & IT', rating: '4.8/5', skills: '459' },
    { title: 'Development & IT', rating: '4.8/5', skills: '459' },],

  },

  popularityGrid: {
    col1: {
      title: 'Why We are Most Popular',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non quis, modi reprehenderit neque vel explicabo, laborum doloribus quod eveniet dolorem excepturi possimus. Quae error quos alias ullam, magni inventore',
      card: [{

        icon: <QualityIcon />,
        title: 'Quality Job'
      },
      {

        icon: <CompanyIcon />,
        title: 'Top Companies'
      }, {

        icon: <ChargeIcon />,
        title: 'No Extra Charge'
      },
      {

        icon: <JobIcon />,
        title: 'International Job'
      }]
    },
    col2: {
      bgImg: '/assets/img/hh5.png',
      bgImgLabel: '',

    }
  }

}

export const Home = React.memo(() => {
 
  const {t} = useTranslation();
  return (<>

    <div className="mx-auto">
    <div
        className="fixed inset-0 z-0 bg-light dark:bg-dark"
        style={{
        
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <Hero title={t('hero.title')} subtitle={t('hero.subtitle')}
      description={t('hero.description')}
      avatar={<StackedAvatar />} quantifier={t('hero.quantifier')}
      figure={t('hero.figure')} statement={t('hero.statement')}
      img="/assets/img/removal.png"
      imgLabel="" card={
        <Card statistics={t('hero.cardFigure')} description={t('hero.cardStatement')}/>
      } alternate={false}/>


      
      <HorTab />
      
      <Category category={data.category} />
      <PopularitySection grid={data.popularityGrid} />
       
      <Tab />
      
    </div>
  </>);
});






