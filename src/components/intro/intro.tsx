import React from 'react'

const Intro = () => {
    return (
        <div>
            React
            <h1>React Testing:</h1>
            <ul>
                <li>
                    As a developer, our primary goal is to build a software that works.
                </li>
                <li>To ensure our software works, we test the application
                    (we check if our software works as expected).
                </li>
                <h4 className='color-yellow'>Manual Testing:</h4>
                <ul>
                    <li>For that we typically relay on manual testing. For example an individual will open a website
                        interact with the website and ensure everythings works as intended.
                    </li>
                    <li>If a new feature is released, you repeat the steps.</li>
                    <li>You may have to test not only the new feature but also the existing features.</li>
                    <span style={{ fontWeight: 600 }}>Drawback:</span>
                    <ol>
                        <li>Time Consuming. (Based on how large your application is)</li>
                        <li>Complex repetitive tasks has a risk of human error</li>
                        <li>Given the deadline, you may not get a change to test all the features you should</li>
                    </ol>
                </ul>
                <h4 className='color-yellow'>Automated Testing:</h4>
                <ul>
                    <li>
                        Are programs that automate the task of testing your software.
                    </li>
                    <li>Write code to test the software code. (Initial investing can pay in the long run)</li>
                    <span style={{ fontWeight: 600 }}>Advantages:</span>
                    <ol>
                        <li>Not Time Consuming.</li>
                        <li>Relible, consistent and not error prone</li>
                        <li>Easy to identify and fix features that break tests</li>
                        <li>Gives you confidence when shipping software (means when software works as intended)</li>
                    </ol>
                </ul>

            </ul>

            <h4>JEST vs React Testing Library (RTL):</h4>

            <ul>
                <h4 className='color-yellow'>JEST:</h4>
                <ul>
                    <li>Js Testing Framework but in react testing its a test runner that finds test,
                        runs the tests, determines whether the tests passed or failed and reports
                        it back in a human readable manner.
                    </li>
                </ul>
                <h4 className='color-yellow'>RTL</h4>
                <ul>
                    <li>Js testing utility that provides virtual DOM for testing react components.
                    </li>
                    <li>And then we can interact with the virtual DOM and verify the behaviour of a component.</li>
                    <li>Testing library is infact a family of packages which helps test UI components</li>
                    <li>Core Library is called DOM Testing Library and RTL is just a wrapper around this core library
                        to test react components in a easiest way.
                    </li>
                </ul>
            </ul>


            <h4>Types of Automated Test:</h4>

            <ul>
                <li className='color-yellow'>Unit Test:</li>
                <ol>
                    <li>Testing individual building block (component, function, class) in isolation, independent of other units.</li>
                    <li>Dependency are mocked.</li>
                    <li>Easy to test</li>
                    <li>Run in short time</li>
                    <li>Easy to run and maintain</li>
                </ol>
                <li className='color-yellow'>Integration Test</li>
                <ol>
                    <li>Testing combination of units, ensuring they work together</li>
                </ol>
                <li className='color-yellow'>End to End Test (E2E)</li>
                <ol>
                    <li>Testing entire application flow and ensuring it works as intended from start to finish</li>
                    <li>Involes real UI, real Backend server, real services etc.</li>
                </ol>
            </ul>


            <h4>Testing Pyramid:</h4>
            <ul>
                <li>Start from unit</li>
                <li>then integrated tests</li>
                <li>then e2e tests</li>
                <li>Think of this is a triangle with bottom having unit test, in mid it has integrated and at top it has e2e test</li>
                <li>Going up means your tests area gets larger but at the same time the number of tests gets smaller</li>
            </ul>


            <h4>Anotomy of Test:</h4>
            <ul>
                <li>test(name, fn, timeout)</li>
                <li>Timeout is optional, how long to wait before aborting the test. default time is 5s</li>
            </ul>



            <h4>Test Driven Development (TDD):</h4>
            <ul>
                <li>Software development process, where you can write test before writing the code</li>
                <li>Once test is done, you can write your code for that test</li>
                <ol>
                    <li>Create tests that verify the functionality of a specific feature.</li>
                    <li>Write code that will run test successfully when re-executed.</li>
                    <li>Refactor the code for optimization while ensuring the test continue to pass</li>
                    <li>Also called <span className='color-yellow'>Red Green Testing</span></li>
                </ol>
            </ul>



            <h4>Jest Watch Mode:</h4>
            <ul>
                <li>Option that can pass to jest asking to watch files that have changed since the last commit and execute test that are related to that files.</li>
                <li>An optimization to run test fast regardless of how many tests you have</li>
            </ul>



            <h4 className='color-yellow'>Filtering Test:</h4>


        </div>
    )
}

export default Intro