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

export const SportIcon = ({ sport }: { sport: SportsType }) => {
  switch (sport) {
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
    case 'basketball':
      return <BasketballIcon />;
    case 'boxing':
      return <BoxingIcon />;
    case 'cycling':
      return <CyclingIcon />;
    case 'dancing':
      return <DancingIcon />;
    case 'fitness':
      return <FitnessIcon />;
    case 'football':
      return <FootballIcon />;
    case 'golf':
      return <GolfIcon />;
    case 'martialArts':
      return <MartialArtsIcon />;
    case 'running':
      return <RunningIcon />;
    case 'skateboarding':
      return <SkateboardingIcon />;
    default:
      return <OtherSportIcon />;
  }
};
