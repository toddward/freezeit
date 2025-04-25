# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `ng build`
- Serve: `ng serve`
- Test all: `ng test`
- Test single file: `ng test --include=src/app/path/to/file.spec.ts`
- Lint: `ng lint` (if eslint is installed)

## Code Guidelines
- **TypeScript**: Use strict mode with explicit types
- **Components**: Use standalone components with explicit imports
- **Naming**: PascalCase for components/services, camelCase for methods/properties
- **Observables**: Suffix with $ (e.g., `items$`)
- **Services**: Use `providedIn: 'root'` pattern
- **Error Handling**: Use RxJS catchError for Observable errors
- **Testing**: Component tests use TestBed and ComponentFixture
- **State Management**: Services with BehaviorSubject
- **Styles**: Use SCSS with component-scoped styles
- **Docker**: Use Docker Compose for containerized dev/prod environments