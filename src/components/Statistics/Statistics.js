import PropTypes from "prop-types";
import React from "react";
import {Section, Title, StatList, Item, Label, Percentage} from './Statistics.styled';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

export default function Statistics({title, stats}){
    return(
        <Section>
        {title && <Title>{title}</Title>}
        <StatList>
          {stats.map((stat, index) => (
            <Item key={index}  style={{ background: getRandomHexColor() }}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Item>
          ))}
        </StatList>
      </Section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
      })
    ).isRequired,
  };

  
  
  
  
  
  