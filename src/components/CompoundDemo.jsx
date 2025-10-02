import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';
import { Tabs, TabsList, Tab, TabPanel } from './Tabs';

export function CompoundDemo() {
  return (
    <div className="compound-demo">
      <h3>🧩 Compound Components Demo</h3>
      
      <div className="demo-section">
        <h4>Accordion (FAQ Style)</h4>
        <Accordion defaultOpen={['item1']}>
          <AccordionItem id="item1">
            <AccordionTrigger id="item1">
              What are Compound Components?
            </AccordionTrigger>
            <AccordionContent id="item1">
              <p>Compound components are a pattern where multiple components work together to form a complete UI.</p>
              <p>They share implicit state and provide a more intuitive API.</p>
              <p><strong>Example:</strong> <code>{'<Select> <Option> </Select>'}</code></p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="item2">
            <AccordionTrigger id="item2">
              Why use this pattern?
            </AccordionTrigger>
            <AccordionContent id="item2">
              <ul>
                <li>✅ More flexible component structure</li>
                <li>✅ Better separation of concerns</li>
                <li>✅ Intuitive API for consumers</li>
                <li>✅ Used by popular libraries like React Router</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem id="item3">
            <AccordionTrigger id="item3">
              How does it work?
            </AccordionTrigger>
            <AccordionContent id="item3">
              <p>Compound components use React Context to share state between parent and children.</p>
              <p>The parent component provides the state and methods, while children consume them.</p>
              <p>This creates a clean, declarative API that's easy to understand and use.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="demo-section">
        <h4>Tabs Component</h4>
        <Tabs defaultValue="react">
          <TabsList>
            <Tab value="react">React</Tab>
            <Tab value="vue">Vue</Tab>
            <Tab value="angular">Angular</Tab>
          </TabsList>

          <TabPanel value="react">
            <div className="tab-content">
              <h5>React - A JavaScript Library</h5>
              <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
              <ul>
                <li>Component-based architecture</li>
                <li>Virtual DOM for performance</li>
                <li>Rich ecosystem</li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel value="vue">
            <div className="tab-content">
              <h5>Vue - The Progressive Framework</h5>
              <p>Vue is approachable, versatile, and performant. It helps you build web user interfaces.</p>
              <ul>
                <li>Progressive framework</li>
                <li>Gentle learning curve</li>
                <li>Excellent documentation</li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel value="angular">
            <div className="tab-content">
              <h5>Angular - Platform for Building Web Applications</h5>
              <p>Angular is a platform for building mobile and desktop web applications.</p>
              <ul>
                <li>Full-featured framework</li>
                <li>TypeScript based</li>
                <li>Enterprise-ready</li>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}