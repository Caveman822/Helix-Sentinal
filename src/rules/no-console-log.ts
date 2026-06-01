import type { Rule } from 'eslint';

const noConsoleLogRule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow console.log statements',
      recommended: true,
    },
    fixable: 'code', // enables --fix support
    schema: [],
    messages: {
      noConsoleLog: 'Unexpected console.log statement. Remove before committing.',
    },
  },
  create(context: Rule.RuleContext): Rule.RuleListener {
    return {
      CallExpression(node) {
        if (node.callee.type !== 'MemberExpression') {
          return;
        }

        if (node.callee.object.type !== 'Identifier') {
          return;
        }

        if (node.callee.property.type !== 'Identifier') {
          return;
        }

        if (
          node.callee.object.name === 'console' &&
          node.callee.property.name === 'log'
        ) {
          context.report({
            node,
            messageId: 'noConsoleLog',
            fix(fixer: Rule.RuleFixer) {
              // Remove the entire statement
              const parent = node.parent;
              if (parent.type === 'ExpressionStatement') {
                return fixer.remove(parent);
              }

              return null;
            },
          });
        }
      },
    };
  },
};

export default noConsoleLogRule;