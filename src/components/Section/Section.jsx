import PropTypes from 'prop-types';
import { SectionHeader, SectionWrapper } from './Section.styled';

export const ContactsSection = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionHeader>{title}</SectionHeader>
      {children}
    </SectionWrapper>
  );
};

ContactsSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
