import excelDownloadForm from '@/components/_qmpComponents/QmpDialog/excelDownloadForm'
import { exportFeeds } from '@/api/export'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      excelForm: {
        url: exportFeeds,
        column: '',
        search: '',
        type: '',
        createTime: '',
        unionid: '',
        team_uuid: ''
      },
      // 导出字段
      dataList: [
        'Feeds内容',
        '事件类型',
        '创建人',
        '创建时间'
      ]
    }
  },
  components: { excelDownloadForm },
  computed: {
    ...mapGetters({ userInfo: 'userInfo' })
  },
  methods: {
    downExcel() {
      this.excelForm.column = this.dataList.join('|')
      this.excelForm.search = this.keywords
      this.excelForm.type = this.activeArrObj.event.join('|')
      this.excelForm.createTime =
        this.activeArrObj.createTime.list
          .join('|')
          .replace('-', '|')
          .replace(/\./g, '-') || ''
      this.excelForm.unionid = this.userInfo.unionid
      this.excelForm.team_uuid = this.userInfo.team_uuid
      this.$refs.excelDownloadRef.exportFn()
    }
  }
}


{
    "workbench.iconTheme": "vscode-icons",
    "scm.alwaysShowProviders": true,
    "terminal.integrated.tabs.enabled": true,
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    },
    "editor.tabSize": 2,
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "eslint.alwaysShowStatus": true,
    "eslint.autoFixOnSave": true,
    "prettier.semi": false,
    "prettier.singleQuote": true,
    "prettier.jsxSingleQuote": true,
    "vetur.format.defaultFormatter.js": "prettier-eslint",
    "vetur.format.defaultFormatterOptions": {
      "prettier": {
        "semi": false,
        "singleQuote": true
      }
    },
    "files.autoSave": "afterDelay",
    "editor.largeFileOptimizations": false,
    "terminal.integrated.shell.osx": "/bin/bash",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "workbench.colorTheme": "Monokai Dimmed",
    "eslint.codeAction.showDocumentation": {
      "enable": true
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "git.alwaysShowStagedChangesResourceGroup": true,
}
