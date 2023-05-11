# med-cards
Simple card layout for medical device data

Requirements: 
- module federation, vite-plugin
- host: card layout
- remote-cards: blood pressure, temperature, 
- remote-setup: administration, connectivity
- remote-patient: patient details
- remote-history: data history

Languages:
- JavaScript: ReactJS
- Go

Storage:
- No database
- Database can be added for history

Styling:
- Plain CSS3
- Flexboxes

Roadmap:
- [ ] Create initial setup
- [ ] Configure vite-plugin
- [ ] Draw flow diagram
- [ ] Create requirements documentation
- [ ] Define ports
- [ ] Create Host
    - [ ] ReactJS
    - [ ] Configure override CSS
    - [ ] Create Go Server
        - [ ] Gin
        - [ ] Embed web files
        - [ ] Build executable
- [ ] Create Remotes
    - [ ] Cards
        - [ ] Apply basic CSS3
    - [ ] Setup
        - [ ] Apply basic CSS3
    - [ ] Patient
        - [ ] Apply basic CSS3
    - [ ] History
        - [ ] Apply basic CSS3
    - [ ] Create Go Server
        - [ ] Gin
        - [ ] Embed web files
        - [ ] Build executable
- [ ] Dockerize
    - [ ] Host, Remotes
    - [ ] Publish images
- [ ] Automation
    - [ ] Builds
    - [ ] Testing
    - [ ] Deployment
