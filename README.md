## 실험 프로젝트
```
npm install --save-dev sb
npx sb init --builder webpack5
npm run storyboard
``` 
 > package.json
``` json
"overrides": [
    {
    "files": [
        "**/*.stories.*"
    ],
    "rules": {
        "import/no-anonymous-default-export": "off"
    }
    }
]
```