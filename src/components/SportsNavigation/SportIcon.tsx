import { SportsType } from '../../constants';
import { SwimmingIcon } from '../icons/sports/SwimmingIcon';
import { TableTennisIcon } from '../icons/sports/TableTennisIcon';
import { TennisIcon } from '../icons/sports/TennisIcon';
import { VolleyballIcon } from '../icons/sports/VolleyballIcon';
import { YogaIcon } from '../icons/sports/YogaIcon';
import { BasketballIcon } from '../icons/sports/BasketballIcon';
import { BoxingIcon } from '../icons/sports/BoxingIcon';
import { CyclingIcon } from '../icons/sports/CyclingIcon';
import { DancingIcon } from '../icons/sports/DancingIcon';
import { FitnessIcon } from '../icons/sports/FitnessIcon';
import { GolfIcon } from '../icons/sports/GolfIcon';
import { RunningIcon } from '../icons/sports/RunningIcon';
import { SkateboardingIcon } from '../icons/sports/SkateboardingIcon';
import { FootballIcon } from '../icons/sports/FootballIcon';
import { MartialArtsIcon } from '../icons/sports/MartialArtsIcon';
import { OtherSportIcon } from '../icons/sports/OtherSportIcon';
import { BadmintonIcon } from '../icons/sports/BadmintonIcon';
import { BowlingIcon } from '../icons/sports/BowlingIcon';
import { DivingIcon } from '../icons/sports/DivingIcon';
import { RollerSkatingIcon } from '../icons/sports/RollerSkatingIcon';
import { CricketIcon } from '../icons/sports/CricketIcon';
import { CanoeIcon } from '../icons/sports/CanoeIcon';
import { FencingIcon } from '../icons/sports/FencingIcon';
import { IceHockeyIcon } from '../icons/sports/IceHockeyIcon';
import { SkiingIcon } from '../icons/sports/SkiingIcon';
import { SnowboardingIcon } from '../icons/sports/SnowboardingIcon';
import { KayakingIcon } from '../icons/sports/KayakingIcon';
import { HikingIcon } from '../icons/sports/HikingIcon';
import { FloorballIcon } from '../icons/sports/FloorballIcon';

export const SportIcon = ({ sport }: { sport: SportsType }) => {
  switch (sport) {
    case 'badminton':
      return <BadmintonIcon />;
    case 'basketball':
      return <BasketballIcon />;
    case 'bowling':
      return <BowlingIcon />;
    case 'boxing':
      return <BoxingIcon />;
    case 'canoe':
      return <CanoeIcon />;
    case 'cricket':
      return <CricketIcon />;
    case 'cycling':
      return <CyclingIcon />;
    case 'dancing':
      return <DancingIcon />;
    case 'diving':
      return <DivingIcon />;
    case 'fencing':
      return <FencingIcon />;
    case 'fitness':
      return <FitnessIcon />;
    case 'floorball':
      return <FloorballIcon />;
    case 'football':
      return <FootballIcon />;
    case 'golf':
      return <GolfIcon />;
    case 'hiking':
      return <HikingIcon />;
    case 'iceHockey':
      return <IceHockeyIcon />;
    case 'kayaking':
      return <KayakingIcon />;
    case 'martialArts':
      return <MartialArtsIcon />;
    case 'rollerSkating':
      return <RollerSkatingIcon />;
    case 'running':
      return <RunningIcon />;
    case 'skateboarding':
      return <SkateboardingIcon />;
    case 'skiing':
      return <SkiingIcon />;
    case 'snowboarding':
      return <SnowboardingIcon />;
    case 'swimming':
      return <SwimmingIcon />;
    case 'tableTennis':
      return <TableTennisIcon />;
    case 'tennis':
      return <TennisIcon />;
    case 'volleyball':
      return <VolleyballIcon />;
    case 'yoga':
      return <YogaIcon />;
    default:
      return <OtherSportIcon />;
  }
};
