import { Fragment } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import styled from 'styled-components';



const StyledWrapper = styled.div`
   
`


export function MainContent(){
    
    const projects = [
        {
            id:'1',
            projectName:'Model Risk Management System & Re-engineering',
            projectType:'Web',
            shortSummary:'A multi-role management system with sophisticated data objects & approval/change workflows.',
            techStack:'Angular(TypeScript), RxJs, SASS',
            introduction:[
                {id:1,
                 content:'Implementing 1:1 styles and functionalities based on UX figma & BA requirements. Development of common \
                components to unify behaviors throughout the system, such as grid tools for managing columns, storing user \
                preferences, polling Kafka messages to update audit datatables, handy Form Validators/Pipes/Directives tailored \
                for the business, modifying component library default behavior via injecting directives.'
                }  
            ]
        }
    ]

    

    return (<StyledWrapper>
        {projects.map(pj=>
            (<Fragment key={pj.id}>
               <div>{pj.projectName}</div>
               <div>{pj.projectType}</div>
               <div>{pj.shortSummary}</div>
               <div>{pj.techStack}</div>
               {pj.introduction.map((intro)=>
               (<Fragment key={intro.id}>
               <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemText secondary={intro.content} />
                </ListItem>
                
                </List>
                </Fragment>))}
            </Fragment>)
        )}
      
    </StyledWrapper>)
}
