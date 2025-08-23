# MCP(Model Context Protocol): is an open protocol that standardizes how applications
## 1. Provide context to LLMs(Large Language Models). Thinks of MCP like a USB-C Port for AI Applications.
## 2. MCP provides a standardized way to connect AI modesl to different data sources and tools. 
## 3. MCP enables you build agents and complex workflows on top of LLMs and connect your models with the world.

Cursor:  (ship faster, safer, and more maintainable code)

    1. Cursor Rules in files( Project-Specific instructions)
        cursor/rules.json

    2. Pre-Prompt(Cursor setting -> rules for AI)

    3. Close Unnecessary files only open needed files in context (@cursor-context)

    4. Watching AI coding, ask for explanations
    
    5. Add Some Logs in Key point Statement

    6. Testing (unit test(Jest, vitest) End-To-End test (Cypress))

    7. Code Review
    
    8. Security Check (audit)

Prompting Engineer(Master the art of Prompting): Augment Prompts Templates
    1. Context:  give clear context:
        [System Context] You are an expert React architect with 8 years of experience in building scalable component libraries. 
Your role is to help senior developers optimize their React codebase. 
The current situation involves migrating a class-based component system to hooks.

    2. Define Formats: Input & Output Definition
    3. Examples: 
    4. Constraints
    5. Comments
    6. Language & Principles
