import React, { useState } from 'react';
import { SkillsDiv } from '../styles/index';
import { makeStyles } from '@material-ui/core/styles';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Skills = () =>{
    const classes = useStyles();
    return(
        <SkillsDiv className={classes.root}>
                <ExpansionPanel >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                    <Typography className={classes.heading}>HTML/CSS</Typography>
                    <Typography className={classes.secondaryHeading}></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                    maximus est, id dignissim quam.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Javascript</Typography>
                    <Typography className={classes.secondaryHeading}></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                    maximus est, id dignissim quam.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                    <Typography className={classes.heading}>React</Typography>
                    <Typography className={classes.secondaryHeading}></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                    diam eros in elit. Pellentesque convallis laoreet laoreet.
                    </Typography>
                </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Node.js</Typography>
                    <Typography className={classes.secondaryHeading}>
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                    </Typography>
                </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Redux</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </SkillsDiv>
    )
}

export default Skills;