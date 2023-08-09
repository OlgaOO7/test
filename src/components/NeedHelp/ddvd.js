import {
  SidebarBlock,
  NeedHelpBlock,
  NeedHelpButton,
  SvgHelp,
  HelpContent,
  Flower,
} from './Sidebar.styled';
import sprite from '../../images/sprite.svg';
import flower from '../../images/flower.png';
import { useState } from 'react';
import NeedHelpModal from 'components/NeedHelp/NeedHelpModal';

export function Sidebar() {
  const [isShow, setIsShow] = useState(false);

  const showModal = () => {
    setIsShow(true);
  }

  const closeModal = () => {
    closeModal(false);
  }
return (
  <SidebarBlock>
      <NeedHelpBlock>
        <Flower src={flower} alt="flower" />

        <HelpContent>
          If you need help with TaskPro, check out our support resources or
          reach out to our customer support team.
        </HelpContent>

        <NeedHelpButton type="button" name="help" onClick={showModal}>
          <SvgHelp>
            <use href={`${sprite}#icon-help`} />
          </SvgHelp>
          Need help?
        </NeedHelpButton>
        {isShow && <NeedHelpModal closeModal={closeModal}/>}
      </NeedHelpBlock>
    </SidebarBlock>
  );
}
